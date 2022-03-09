
import ApiStore from './store/ApiStore.js';
import { note } from './views/note.js';

const root = document.getElementById("root");

/**
 * Represents a navigation bar
 * @constructor
 * @param {HTMLDivElement} node - The node for which tmpNavigation will be append
 */
const createTmpNavigation = async (node) => {
  const signup = document.createElement('button');
  const login = document.createElement('button');
  const noteNav = document.createElement('button');
  const logout = document.createElement('button');

  signup.dataset.section = 'signup';
  login.dataset.section = 'login';
  noteNav.dataset.section = 'note';
  logout.dataset.section = 'logout';

  signup.innerText = 'signup';
  login.innerText = 'login';
  noteNav.innerText = 'note';
  logout.innerText = 'logout';

  const tmpNavbar = document.createElement("div");
  tmpNavbar.classList.add("tmp_navigation");
  tmpNavbar.appendChild(signup);
  tmpNavbar.appendChild(login);
  tmpNavbar.appendChild(noteNav);
  tmpNavbar.appendChild(logout);

  const apResp = await ApiStore.Login({ email: "nikita@mail.ru", password: "Nikita1234!@#" })


  // console.log("log", apResp);
  console.log(document.cookie);
  node.appendChild(tmpNavbar);
};

createTmpNavigation(root);

root.addEventListener('click', async (e) => {
  const { target } = e;
  switch (target.dataset.section) {
    case "signup": {
      root.innerHTML = "";
      root.innerText = "there would be signup page";
      createTmpNavigation(root);
      break;
    }

    case "login": {
      root.innerHTML = "";
      root.innerText = "there would be login page";
      createTmpNavigation(root);
      break;
    }

    case "note": {
      root.innerHTML = "";
      createTmpNavigation(root);
      note(root);
      break;
    }

    case 'logout': {
      root.innerHTML = '';
      createTmpNavigation(root);
      const logoutRes = await ApiStore.Logout();
      // note(root);
      console.log(logoutRes);
      break;
    }

    default:
  }
});
