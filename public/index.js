import { renderEnter } from './components/Enter/Enter.js';
import { SetFavicon } from './js/utils.js';

SetFavicon();

// _______best practice navigation, well played_____
const root = document.getElementById('root');

const createTmpNavigation = (node) => {
  const signup = document.createElement('button');
  const login = document.createElement('button');
  const note = document.createElement('button');

  signup.dataset.section = 'signup';
  login.dataset.section = 'login';
  note.dataset.section = 'note';

  signup.innerText = 'signup';
  login.innerText = 'login';
  note.innerText = 'note';

  const tmpNavbar = document.createElement('div');
  tmpNavbar.classList.add('tmp_navigation');
  tmpNavbar.appendChild(signup);
  tmpNavbar.appendChild(login);
  tmpNavbar.appendChild(note);

  node.appendChild(tmpNavbar);
};
createTmpNavigation(root);

root.addEventListener('click', (e) => {
  const { target } = e;
  switch (target.dataset.section) {
    case 'signup': {
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
      break;
    }
    case 'login': {
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
      break;
    }
    default: {
      break;
    }
  }
});
