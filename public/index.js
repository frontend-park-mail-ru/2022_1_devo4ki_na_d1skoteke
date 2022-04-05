/* eslint-disable no-undef */
/* eslint-disable camelcase */

import { AuthController } from './app/controllers/Auth/Auth.js';
import { AuthModel } from './app/models/Auth/Auth.js';
import { AuthView } from './app/views/Auth/Auth.js';
import { SetFavicon, haveWrongInput, badResponseHandler } from './js/utils.js';
import { ApiStore } from './store/ApiStore.js';
import { note } from './views/note.js';
import { Router } from './modules/router.js';
import { routes } from './consts/routes.js';

const root = document.getElementById('root');
SetFavicon();

const router = new Router(root);

router.start();
// router.register(routes.loginPage, loginController);


const controllerAuth = new AuthController(new AuthModel(), new AuthView());


/**
 * Create notes page for user, if user is unauthorised create signup page
//  */
// const notesPage = async () => {
//   root.innerHTML = '';

//   const hehe = await ApiStore.CheckAuth();

//   if (hehe === 401) {
//     controllerAuth.render(root, "signup");
//     return;
//   }

//   note(root);
// };

// notesPage();

// /**
//  * Creating signup page
//  */
// const signupPage = () => {

//   controllerAuth.render(root, "signup");

//   const signUp = document.forms.namedItem('signup-form');
//   signUp.addEventListener('submit', async (e) => {
//     e.preventDefault();

//     if (haveWrongInput(signUp)) {
//       return;
//     }

//     const email = signUp.email.value.trim();
//     const username = signUp.nickname.value.trim();
//     const password = signUp.primaryPassword.value.trim();
//     const confirm_password = signUp.confirmPassword.value.trim();

//     const res = await ApiStore.Signup({
//       username,
//       email,
//       password,
//       confirm_password,
//     });

//     if (res !== undefined && !res.ok) {
//       notesPage();
//       return;
//     }

//     await ApiStore.Login({ email, password });

//     notesPage();
//   });
// };

// /**
//  * Creating login page
//  */
// const loginPage = () => {

//   controllerAuth.render(root, "login");


//   const loginForm = document.forms.namedItem('login-form');
//   loginForm.addEventListener('submit', async (e) => {
//     e.preventDefault();

//     if (haveWrongInput(loginForm)) {
//       return;
//     }

//     const email = loginForm.email.value.trim();
//     const password = loginForm.password.value.trim();

//     const res = await ApiStore.Login({ email, password });

//     if (res.status !== 200) {
//       badResponseHandler();
//       return;
//     }

//     note(root);
//   });
// };

// /**
//  * Config of whole application.
//  * Shows dependence of links to our pages and functions that display them
//  */
// const configApp = {
//   notes: {
//     href: '/notes',
//     openMethod: notesPage,
//   },
//   signup: {
//     href: '/sighup',
//     openMethod: signupPage,
//   },
//   login: {
//     href: '/login',
//     openMethod: loginPage,
//   },
// };

// /**
//  * Adding event listener to all links to make application SPA
//  * replaces GET requests to function calls which creates specific page
//  * depending on config of our application
//  */
// root.addEventListener('click', (e) => {
//   const { target } = e;

//   if (target instanceof HTMLAnchorElement) {
//     e.preventDefault();

//     const { section } = target.dataset;
//     if (section) {
//       configApp[section].openMethod();
//     }
//   }
// });


root.addEventListener('click', async (e) => {
  const { target } = e;
  switch (target.dataset.section) {
    case 'signup': {
      signupPage();
      break;
    }

    case 'login': {
      loginPage();
      break;
    }

    case 'note': {
      note(root);
      break;
    }

    case 'logout': {
      root.innerHTML = '';
      await ApiStore.Logout();
      loginPage();
      break;
    }

    default: {
      break;
    }
  }
});
