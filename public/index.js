import { Login } from './components/Enter/login.js';
import { Signup } from './components/Enter/signup.js';
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
      Signup();
      break;
    }
    case 'login': {
      Login();
      break;
    }
    default: {
      break;
    }
  }
});
