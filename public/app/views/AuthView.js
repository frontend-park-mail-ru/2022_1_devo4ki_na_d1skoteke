/* eslint-disable */
import { BaseView } from './BaseView.js';
import { events } from '../../consts/events.js';
import {renderAuthPage} from '../../components/Auth/Auth.js';
import {badResponseHandler, haveWrongInput} from '../../js/utils.js';

export class AuthView extends BaseView {
  constructor(eventBus, { data = {} } = {}) {
    super(eventBus, data);
  }
  render = (context) => {
    if (context.data === 'signup') {
      renderAuthPage({
        ENTER_TYPE: 'signup',
        inputForms: [
          {
            labelname: 'Email',
            name: 'email',
            placeholder: 'Enter email',
          },
          {
            labelname: 'Nickname',
            name: 'nickname',
            placeholder: 'Enter your nickname',
          },
          {
            type: 'password',
            labelname: 'Password',
            name: 'primaryPassword',
            placeholder: 'Enter password',
          },
          {
            type: 'password',
            labelname: 'Confirm password',
            name: 'confirmPassword',
            placeholder: 'Enter password again',
          },
        ],
      });
      this.signupHandler();
      return;
    }
    renderAuthPage({
      ENTER_TYPE: 'login',
      inputForms: [
        {
          labelname: 'Email',
          name: 'email',
          placeholder: 'Enter email',
        },
        {
          type: 'password',
          labelname: 'Password',
          name: 'password',
          placeholder: 'Enter password',
        },
      ],
    });
    this.loginHandler();
  };

  loginHandler() {
    const loginForm = document.forms.namedItem('login-form');
    loginForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      if (haveWrongInput(loginForm)) {
        return;
      }
      this.eventBus.emit(events.authPage.submitLogin, { loginForm });

      // EventBus.emit('authorized');
    });
  }

  signupHandler() {
    const signupForm = document.forms.namedItem('signup-form');
    signupForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      if (haveWrongInput(signupForm)) {
        return;
      }
      this.eventBus.emit(events.authPage.submitSignup, { signupForm });

      // EventBus.emit('authorized');
    });
  }

  showRequestErrors() {
    badResponseHandler();
  }
}
