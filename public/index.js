/* eslint-disable no-undef */
import { renderAuthPage } from './components/Auth/Auth.js';
import { SetFavicon, haveWrongInput, badResponseHandler } from './js/utils.js';

const root = document.getElementById('root');
SetFavicon();

const configApp = {
  notes: {
    href: '/notes',
    openMethod: notesPage,
  },
  signup: {
    href: '/sighup',
    text: 'Зарегистрироваться',
    openMethod: signupPage,
  },
  login: {
    href: '/login',
    text: 'Войти',
    openMethod: loginPage,
  },
};

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

const signupPage = () => {
  renderAuthPage({
    ENTER_TYPE: 'signup',
    inputForms: [
      {
        labelname: 'Email',
        type: 'email',
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
        type: 'password',
        name: 'primaryPassword',
        placeholder: 'Enter password',
      },
      {
        labelname: 'Confirm password',
        type: 'password',
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

const loginPage = () => {
  renderAuthPage({
    ENTER_TYPE: 'login',
    inputForms: [
      {
        labelname: 'Email',
        type: 'email',
        name: 'email',
        placeholder: 'Enter email',
      },
      {
        labelname: 'Password',
        type: 'password',
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
