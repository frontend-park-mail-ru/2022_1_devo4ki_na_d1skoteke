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
import { NoteController } from './app/controllers/Note/NoteController.js';
import { NoteModel } from './app/models/Note/Note.js';
import { NoteView } from './app/views/Note/Note.js';

const root = document.getElementById('root');
SetFavicon();

const controllerAuth = new AuthController(new AuthModel(), new AuthView());

const controllerNote = new NoteController(new NoteModel(), new NoteView());

/**
 * Creating signup page
 */
const signupPage = () => {
  controllerAuth.render(root, 'signup');
};

const loginPage = () => {
  controllerAuth.render(root, 'login');
};

const logoutPage = async () => {
  root.innerHTML = '';
  await ApiStore.Logout();
  loginPage();
};

const notesPage = async () => {
  controllerNote.init(root);
};

notesPage();

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
  },
};

EventBus.on('click', (e) => {
  const { target } = e;

  const { section } = target.dataset;
  
  if (section === 'logout') {
    configApp[section].openMethod();
  }

  if (target instanceof HTMLAnchorElement) {
    e.preventDefault();

    const { section } = target.dataset;

    console.log('outside:', section);
    
    if (section) {
      configApp[section].openMethod();
    }
  }
});

EventBus.on('unauthorized', () => {
  controllerAuth.render(root, 'signup');
});

EventBus.on('authorized', () => {
  note(root);
});

EventBus.on('unsuccessfuly-signup', () => {
  alert('try one more');
  notesPage();
});

EventBus.on('successfuly-signup', async (e) => {
  const { email, password } = e;
  console.log(email, password);
  await ApiStore.Login({ email, password });
  notesPage();
});
