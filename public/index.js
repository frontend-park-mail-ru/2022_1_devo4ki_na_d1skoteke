/* eslint-disable no-undef */
/* eslint-disable camelcase */

import { AuthController } from './app/controllers/Auth/Auth.js';
import { AuthModel } from './app/models/Auth/Auth.js';
import { AuthView } from './app/views/Auth/Auth.js';
import { SetFavicon, haveWrongInput, badResponseHandler } from './js/utils.js';
import { ApiStore } from './store/ApiStore.js';
import { note } from './views/note.js';

import EventBus from './modules/eventBus.js';
import { routes } from './consts/routes.js';


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
  logout: {
    href: '/logout',
    openMethod: logoutPage,
  }
};



const controllerAuth = new AuthController(new AuthModel(), new AuthView());


EventBus.on("click", (e) => {
  const { target } = e;

  const { section } = target.dataset;
  
  if (section === 'logout') {
    configApp[section].openMethod();
  }

  if (target instanceof HTMLAnchorElement) {
    e.preventDefault();

    const { section } = target.dataset;

    console.log("outside:",section)
    
    if (section) {
      configApp[section].openMethod();
    }
  }
})

EventBus.on("unauthorized", () => {
  controllerAuth.render(root, "signup");
});

EventBus.on("authorized", () => {
  note(root);
})

EventBus.on("unsuccessfuly-signup", () => {
  alert("try one more");
  notesPage();
})

EventBus.on('successfuly-signup', async () => {
  await ApiStore.Login({ email, password });
  notesPage();
})

// import {e}
// import { Router } from './modules/router.js';


// eventBus
// {EventBus }
const root = document.getElementById('root');
SetFavicon();

// const router = new Router(root);

// router.start();
// router.register(routes.loginPage, loginController);




/**
 * Create notes page for user, if user is unauthorised create signup page
 */
const notesPage = async () => {
  root.innerHTML = '';

  const hehe = await ApiStore.CheckAuth();

  if (hehe === 401) {
    EventBus.emit('unauthorized', {data: ""});
    return;
  }

  EventBus.emit('authorized', {data: ""});

};

notesPage();

/**
 * Creating signup page
 */
const signupPage = () => {

  controllerAuth.render(root, "signup");

  const signUp = document.forms.namedItem('signup-form');
  signUp.addEventListener('submit', async (e) => {
    e.preventDefault();

    if (haveWrongInput(signUp)) {
      return;
    }

    const email = signUp.email.value.trim();
    const username = signUp.nickname.value.trim();
    const password = signUp.primaryPassword.value.trim();
    const confirm_password = signUp.confirmPassword.value.trim();

    const res = await ApiStore.Signup({
      username,
      email,
      password,
      confirm_password,
    });


    if (res !== undefined && !res.ok) {
      EventBus.emit("unsuccessfuly-signup");
      return;
    }

    EventBus.emit("successfuly-signup");
  });
};

/**
 * Creating login page
 */
const logoutPage = async () => {
  root.innerHTML = '';
  await ApiStore.Logout();
  loginPage();
}


const loginPage = () => {

  controllerAuth.render(root, "login");


  const loginForm = document.forms.namedItem('login-form');
  loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    if (haveWrongInput(loginForm)) {
      return;
    }

    const email = loginForm.email.value.trim();
    const password = loginForm.password.value.trim();

    const res = await ApiStore.Login({ email, password });

    if (res.status !== 200) {
      badResponseHandler();
      return;
    }

    note(root);
  });
};

