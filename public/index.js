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
import { Router } from './modules/router.js';
import { MainPage } from './app/controllers/MainPage/MainPage.js';

// import Router from './Router';


const root = document.getElementById('root');
SetFavicon();

const controllerAuth = new AuthController(new AuthModel(), new AuthView());

const controllerNote = new NoteController(new NoteModel(), new NoteView());
const fsdf = new MainPage();

const router = new Router(root);

router.register('/login', AuthController);
router.register('/signup', AuthController);
router.register('/logout', AuthController);

router.register('/', AuthController);

// router.routes = aewfwef;

/**
 * Creating signup page
 */

const initial = async () => {

  root.innerHTML = '';

  const hehe = await ApiStore.CheckAuth();
  // eventBus
  if (hehe === 401) {
    EventBus.emit('unauthorized', { data: '' });
    return;
  }

  EventBus.emit('authorized', { data: '' });

  // controllerNote.init(root);
};

initial();


EventBus.on("authorized", () => {

  fsdf.render(root);
})

// EventBus.on('unsuccessfuly-signup', () => {
//   alert('try one more');
//   notesPage();
// });

// EventBus.on('successfuly-signup', async (e) => {
//   const { email, password } = e;
//   console.log(email, password);
//   await ApiStore.Login({ email, password });
//   notesPage();
// });


EventBus.on('pathChanged', (data) => {
  console.log("pathChanged FFFFFFFFFFFFFF: ",data);
} )