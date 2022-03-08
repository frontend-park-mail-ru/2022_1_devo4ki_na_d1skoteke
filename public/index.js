/* eslint-disable no-undef */
import { renderAuthPage } from './components/Auth/Auth.js';
import { SetFavicon, haveWrongInput, badResponseHandler } from './js/utils.js';

const root = document.getElementById('root');
SetFavicon();

/**
 * Create notes page for user, if user is unauthorised create signup page
 */
const notesPage = () => {
  root.innerHTML = '';

  Ajax.get(
    {
      url: '/notes',
      callback: (status, responseText) => {
        let isAuthorised = false;
        if (status === 200) {
          isAuthorised = true;
        }

        if (isAuthorised) {
          const notePage = document.createElement('div');
          notePage.classList.add('title');
          const { nickname } = JSON.parse(responseText);

          notePage.innerHTML = `This is ${nickname}'s Notes page.`;
          root.appendChild(notePage);
          return;
        }
        signupPage();
      },
    },
  );
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
        type: 'nickname',
        name: 'nickname',
        placeholder: 'Enter your nickname',
      },
      {
        labelname: 'Password',
        name: 'primaryPassword',
        placeholder: 'Enter password',
      },
      {
        labelname: 'Confirm password',
        name: 'confirmPassword',
        placeholder: 'Enter password again',
      },
    ],
  });

  const signUp = document.forms.namedItem('signup-form');
  signUp.addEventListener('submit', (e) => {
    e.preventDefault();

    if (haveWrongInput(signUp)) {
      return;
    }

    const email = signUp.email.value.trim();
    const nickname = signUp.nickname.value.trim();
    const password = signUp.primaryPassword.value.trim();

    Ajax.post(
      {
        url: '/signup',
        body: { email, nickname, password },
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
        labelname: 'Password',
        name: 'password',
        placeholder: 'Enter password',
      },
    ],
  });

  const loginForm = document.forms.namedItem('login-form');
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    if (haveWrongInput(loginForm)) {
      return;
    }

    const email = loginForm.email.value.trim();
    const password = loginForm.password.value.trim();

    Ajax.post(
      {
        url: '/login',
        body: { email, password },
        callback: (status, responseText) => {
          if (status === 200) {
            // console.log('auth success');
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
});
