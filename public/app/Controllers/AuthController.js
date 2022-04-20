import { events } from '../../consts/events.js';
import { UserModel } from '../models/UserModel.js';
import { AuthView } from '../views/AuthView.js';
import { BaseController } from './BaseController.js';

export class AuthController extends BaseController {
  constructor() {
    super(AuthView, UserModel);
    this.events.push(
      {
        event: events.authPage.unauthorised,
        handler: this.view.render,
      },
      {
        event: events.authPage.authorised,
        handler: this.view.render,
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
