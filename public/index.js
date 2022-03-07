import { renderEnter } from './components/Enter/Enter.js';
import { SetFavicon } from './js/utils.js';

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
        name: 'primary-password',
        placeholder: 'Enter password',
      },
      {
        labelname: 'Confirm password',
        type: 'password',
        name: 'confirm-password',
        placeholder: 'Enter password again',
      },
    ],
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
