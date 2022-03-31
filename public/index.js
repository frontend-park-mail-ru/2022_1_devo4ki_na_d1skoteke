/* eslint-disable no-undef */
/* eslint-disable camelcase */

import { renderAuthPage } from './components/Auth/Auth.js';
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


// /**
//  * Create notes page for user, if user is unauthorised create signup page
//  */
// const notesPage = async () => {
//   root.innerHTML = '';
//
//   const hehe = await ApiStore.CheckAuth();
//
//   if (hehe === 401) {
//     signupPage();
//     return;
//   }
//
//   note(root);
// };
//
// notesPage();
//
// /**
//  * Creating signup page
//  */
// const signupPage = () => {
//   renderAuthPage({
//     ENTER_TYPE: 'signup',
//     inputForms: [
//       {
//         labelname: 'Email',
//         name: 'email',
//         placeholder: 'Enter email',
//       },
//       {
//         labelname: 'Nickname',
//         name: 'nickname',
//         placeholder: 'Enter your nickname',
//       },
//       {
//         type: 'password',
//         labelname: 'Password',
//         name: 'primaryPassword',
//         placeholder: 'Enter password',
//       },
//       {
//         type: 'password',
//         labelname: 'Confirm password',
//         name: 'confirmPassword',
//         placeholder: 'Enter password again',
//       },
//     ],
//   });
//
//   const signUp = document.forms.namedItem('signup-form');
//   signUp.addEventListener('submit', async (e) => {
//     e.preventDefault();
//
//     if (haveWrongInput(signUp)) {
//       return;
//     }
//
//     const email = signUp.email.value.trim();
//     const username = signUp.nickname.value.trim();
//     const password = signUp.primaryPassword.value.trim();
//     const confirm_password = signUp.confirmPassword.value.trim();
//
//     const res = await ApiStore.Signup({
//       username,
//       email,
//       password,
//       confirm_password,
//     });
//
//     if (res !== undefined && !res.ok) {
//       notesPage();
//       return;
//     }
//
//     await ApiStore.Login({ email, password });
//
//     notesPage();
//   });
// };
//
// /**
//  * Creating login page
//  */
// const loginPage = () => {
//   renderAuthPage({
//     ENTER_TYPE: 'login',
//     inputForms: [
//       {
//         labelname: 'Email',
//         name: 'email',
//         placeholder: 'Enter email',
//       },
//       {
//         type: 'password',
//         labelname: 'Password',
//         name: 'password',
//         placeholder: 'Enter password',
//       },
//     ],
//   });
//
//   const loginForm = document.forms.namedItem('login-form');
//   loginForm.addEventListener('submit', async (e) => {
//     e.preventDefault();
//
//     if (haveWrongInput(loginForm)) {
//       return;
//     }
//
//     const email = loginForm.email.value.trim();
//     const password = loginForm.password.value.trim();
//
//     const res = await ApiStore.Login({ email, password });
//
//     if (res.status !== 200) {
//       badResponseHandler();
//       return;
//     }
//
//     note(root);
//   });
// };
//
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
//
// /**
//  * Adding event listener to all links to make application SPA
//  * replaces GET requests to function calls which creates specific page
//  * depending on config of our application
//  */
// root.addEventListener('click', (e) => {
//   const { target } = e;
//
//   if (target instanceof HTMLAnchorElement) {
//     e.preventDefault();
//
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
