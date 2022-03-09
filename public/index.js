import { note } from "./views/note.js";

const root = document.getElementById("root");

/**
 * Represents a navigation bar
 * @constructor
 * @param {HTMLDivElement} node - The node for which tmpNavigation will be append
 */
const createTmpNavigation = (node) => {
  const signup = document.createElement("button");
  const login = document.createElement("button");
  const noteNav = document.createElement("button");

  signup.dataset.section = "signup";
  login.dataset.section = "login";
  noteNav.dataset.section = "note";

  signup.innerText = "signup";
  login.innerText = "login";
  noteNav.innerText = "note";

  const tmpNavbar = document.createElement("div");
  tmpNavbar.classList.add("tmp_navigation");
  tmpNavbar.appendChild(signup);
  tmpNavbar.appendChild(login);
  tmpNavbar.appendChild(noteNav);

  node.appendChild(tmpNavbar);
};

createTmpNavigation(root);

root.addEventListener("click", (e) => {
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

    default:
  }
});
