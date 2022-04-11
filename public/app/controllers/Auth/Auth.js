import { badResponseHandler, haveWrongInput } from '../../../js/utils.js';
import EventBus from '../../../modules/eventBus.js';
import { ApiStore } from '../../../store/ApiStore.js';

class AuthController {
  #model;

  #view;
    
  constructor(model, view) {
    this.#model = model;
    this.#view = view;


    EventBus.on('unauthorized', () => {
      this.render(root, 'signup');
    });
    

    EventBus.on('pathChanged', (data) => {
      this.render(root, data.section);

      console.log("datafffffffffffffffff", data);

      if (data.section === 'logout') {
        ApiStore.Logout();
      }
    });

  }

  subscribe() {
    
  }

  unsubscribe() {
  }

  // onSubmit = async (e) => {
  //   e.preventDefault();
  //   if (haveWrongInput(loginForm)) {
  //     return;
  //   }
          
  //   const email = loginForm.email.value.trim();
  //   const password = loginForm.password.value.trim();
          
  //   const res = await ApiStore.Login({ email, password });
  //   if (res.status !== 200) {
  //     badResponseHandler();
  //     EventBus.emit('unauthorized');
  //     return;
  //   }
          
  //   EventBus.emit('authorized');
  // }

  render(node, view_tag) {
    const dataModel = this.#model.getModel(view_tag);
    this.#view.render(node, dataModel);

    switch (view_tag) {
      case 'login': {
        const loginForm = document.forms.namedItem('login-form');
        

        loginForm.addEventListener('submit', async (e) => {
          e.preventDefault();
          if (haveWrongInput(loginForm)) {
            return;
          }
                
          const email = loginForm.email.value.trim();
          const password = loginForm.password.value.trim();
                
          const res = await ApiStore.Login({ email, password });
          if (res.status !== 200) {
            badResponseHandler();
            EventBus.emit('unauthorized');
            return;
          }
                
          EventBus.emit('authorized');
        });

        break;
      }

      case 'signup': {
        const signUp = document.forms.namedItem('signup-form');
        signUp.addEventListener('submit', async (e) => {
          e.preventDefault();
          if (haveWrongInput(signUp)) {
            return;
          }
              
          const email = signUp.email.value.trim();
          const username = signUp.nickname.value.trim();
          const password = signUp.primaryPassword.value.trim();
          const confirm_password = signUp.confirmPassword.value.trim();
              
          const res = await ApiStore.Signup({
            username,
            email,
            password,
            confirm_password,
          });
              
          if (res !== undefined && !res.ok) {
            EventBus.emit('unauthorized');

            return;
          }
              
          EventBus.emit('authorized');

          // EventBus.emit('successfuly-signup', { email, password });
        });

        break;
      }

      default: {
      }
    }
  }
}

export { AuthController };
