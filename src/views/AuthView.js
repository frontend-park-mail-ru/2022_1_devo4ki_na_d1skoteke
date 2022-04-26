/* eslint-disable */
import { BaseView } from './BaseView.js';
import { events } from '../consts/events.js';
import {renderAuthPage} from '../components/Auth/Auth.js';
import {badResponseHandler, haveWrongInput} from '../js/utils.js';
import { loginFormStructure, signupFormStructure } from '../consts/formData.js';

export class AuthView extends BaseView {
  constructor(eventBus, { data = {} } = {}) {
    super(eventBus, data);
  }
  render = (context) => {
    if (context.data === 'signup') {
      renderAuthPage(signupFormStructure);
      this.signupHandler();
      return;
    }
    renderAuthPage(loginFormStructure);
    this.loginHandler();
  };

  loginHandler() {
    const loginForm = document.forms.namedItem('login-form');
    loginForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      if (haveWrongInput(loginForm)) {
        return;
      }
      this.eventBus.emit(events.authPage.submitLogin, { loginForm });
    });
  }

  signupHandler() {
    const signupForm = document.forms.namedItem('signup-form');
    signupForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      if (haveWrongInput(signupForm)) {
        return;
      }
      this.eventBus.emit(events.authPage.submitSignup, { signupForm });
    });
  }

  showRequestErrors() {
    badResponseHandler();
  }
}
