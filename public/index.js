import { renderEnter } from './components/Enter/Enter.js';
import { SetFavicon, haveWrongInput } from './js/utils.js';

const root = document.getElementById('root');
SetFavicon();

const signupPage = () => {
  renderEnter({
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
        callback: (status) => {
          if (status === 201) {
            console.log('success');
            // TODO: notesPage
            return;
          }
          console.log('auth error');
        },
      },
    );
  });
};

const loginPage = () => {
  renderEnter({
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
        callback: (status) => {
          if (status === 200) {
            console.log('auth success');
            // TODO: notesPage
            return;
          }
          console.log('auth error');
        },
      },
    );
  });
};

const configApp = {
  notes: {
    href: '/',
    // TODO: openMethod: notesPage,
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

signupPage();

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
