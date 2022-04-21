import { events } from '../../consts/events.js';
import { AuthModel } from '../models/AuthModel.js';
import { AuthView } from '../views/AuthView.js';
import { BaseController } from './BaseController.js';

export class AuthController extends BaseController {
  constructor() {
    super(AuthView, AuthModel);
    this.events.push(
      {
        event: events.authPage.unauthorised,
        handler: this.view.render,
      },
      {
        event: events.notesPage.authCheckRequest,
        handler: this.model.emitAuthStatus,
      },
      {
        event: events.authPage.submitLogin,
        handler: this.model.userLogin,
      },
      {
        event: events.authPage.submitSignup,
        handler: this.model.userSignup,
      },
      {
        event: events.authPage.badResponse,
        handler: this.view.showRequestErrors,
      },
    );
    this.subscribe();
  }
}
