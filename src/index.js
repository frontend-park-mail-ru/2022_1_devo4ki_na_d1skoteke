/* eslint-disable no-undef */
/* eslint-disable camelcase */
import './index.scss';
import './img/favicon.ico';
import { SetFavicon } from './js/utils.js';
import { Router } from './modules/router.js';
import { AuthController } from './controllers/AuthController.js';
import { NotesController } from './controllers/NotesController.js';
import { routes } from './consts/routes.js';

const root = document.getElementById('root');

SetFavicon();

const router = new Router(root);
const authController = new AuthController();
const notesController = new NotesController();

router.register(routes.loginPage, authController)
  .register(routes.signupPage, authController)
  .register(routes.notesPage, notesController)
  .start();
