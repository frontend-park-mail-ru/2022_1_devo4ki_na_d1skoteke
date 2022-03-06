
import note from "./views/note.js";

let root = document.getElementById("root");

const createTmpNavigation = (node) => {
  const signup = document.createElement("button");
  const login = document.createElement("button");
  const note = document.createElement("button");

  signup.dataset.section = "signup";
  login.dataset.section = "login";
  note.dataset.section = "note";
 
  signup.innerText = "signup";
  login.innerText = "login";
  note.innerText = "note";

  const tmp_navbar = document.createElement("div");
  tmp_navbar.classList.add("tmp_navigation");
  tmp_navbar.appendChild(signup);
  tmp_navbar.appendChild(login);
  tmp_navbar.appendChild(note);

  node.appendChild(tmp_navbar);

};




createTmpNavigation(root);



root.addEventListener("click", (e) => {
  const { target } = e;
  switch (target.dataset.section) {
      case "signup": {

        root.innerHTML = '';
        root.innerText = "there would be signup page"
        createTmpNavigation(root);
        console.log("signup");

        break;
      } 

      case "login": {
        root.innerHTML = '';
        root.innerText = "there would be login page"
        createTmpNavigation(root);
        console.log("login");
        break;
      } 

      case "note": {
        root.innerHTML = '';
        createTmpNavigation(root);
        note(root);
        console.log("note");
        break;
      } 

      default :{
        console.log("unrecognized event");

      }
  }
});
