/* eslint-disable no-undef */
import { renderAuthPage } from './components/Auth/Auth.js';
import { SetFavicon, haveWrongInput, badResponseHandler } from './js/utils.js';




import ApiStore from './store/ApiStore.js';
import { note } from './views/note.js';



const root = document.getElementById("root");

// const createLogoutButton = () => {

//   // but.onclick()
// }

SetFavicon();

/**
 * Create notes page for user, if user is unauthorised create signup page
 */
const notesPage = async () => {
  root.innerHTML = '';

  const hehe = await ApiStore.GetAllNotes();
  let isAuthorised = false;

  if (hehe === 401) {
    loginPage();
    console.log("rgwethqrthwrh");
    return;
  }


  note(root);
  createLogoutButton();




  // console.log("fetchres", hehe);
  return;
};
notesPage();

/**
 * Creating signup page
 */
const signupPage = () => {
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

    const res = await ApiStore.Signup({ username, email, password, confirm_password });

    // if res.o

    console.log(res);


    if (res !== undefined && !res.ok) {
      notesPage();
      return;
    }

    const res2 = await ApiStore.Login({ email, password });

    console.log("", res2)
    notesPage();



    return;
    Ajax.post(
      {
        url: 'http://95.163.212.32:3001/api/v1/users/signup',
        body: { nickname, email, password, confirm_password },
        callback: (status, responseText) => {
          if (status === 201) {
            notesPage();
            return;
          }
          if (status === 400) {
            badResponseHandler(responseText);
          }
        },
      },
    );
  });
};

/**
 * Creating login page
 */
const loginPage = () => {
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

  const loginForm = document.forms.namedItem('login-form');
  loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    if (haveWrongInput(loginForm)) {
      return;
    }

    const email = loginForm.email.value.trim();
    const password = loginForm.password.value.trim();

    const res = await ApiStore.Login({email, password});
    
    console.log(res);

    if (res.status !== 200) {

      loginPage();
      return;
    }

    console.log("login res",res);

    note(root);
    return;
  });
};

/**
 * Config of whole application.
 * Shows dependence of links to our pages and functions that display them
 */
const configApp = {
  notes: {
    href: '/notes',
    openMethod: notesPage,
  },
  signup: {
    href: '/sighup',
    openMethod: signupPage,
  },
  login: {
    href: '/login',
    openMethod: loginPage,
  },
};

/**
 * Adding event listener to all links to make application SPA
 * replaces GET requests to function calls which creates specific page
 * depending on config of our application
 */
root.addEventListener('click', (e) => {
  const { target } = e;

  if (target instanceof HTMLAnchorElement) {
    e.preventDefault();

    const { section } = target.dataset;
    if (section) {
      configApp[section].openMethod();
    }

  }
})

root.addEventListener('click', async (e) => {
  const { target } = e;
  switch (target.dataset.section) {
    case "signup": {
      root.innerHTML = "";
      signupPage();
      break;
    }

    case "login": {
      root.innerHTML = "";
      loginPage();
      break;
    }

    case "note": {
      root.innerHTML = "";
      note(root);
      break;
    }

    case 'logout': {
      root.innerHTML = '';
      const logoutRes = await ApiStore.Logout();
      // note(root);
      loginPage();
      console.log(logoutRes);
      break;
    }

  }
});
