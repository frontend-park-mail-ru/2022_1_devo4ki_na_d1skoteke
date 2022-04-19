import { events } from '../../consts/events.js';
import { AuthModel } from '../models/AuthModel.js';
import { AuthView } from '../views/AuthView/AuthView.js';
import { BaseController } from './BaseController.js';

export class AuthController extends BaseController {
  constructor() {
    super(AuthView, AuthModel);
    this.events.push(
      {
        event: events.authPage.unauthorised,
        handler: this.view.render('signup'),
      },
    );
    this.subscribe();
  }
}
