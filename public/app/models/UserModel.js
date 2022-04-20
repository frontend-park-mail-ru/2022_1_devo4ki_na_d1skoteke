/* eslint-disable camelcase,class-methods-use-this */
import { eventBus } from '../../modules/eventBus.js';
import { ApiStore } from '../../store/ApiStore.js';
import { events } from '../../consts/events.js';

export class UserModel {
  constructor() {
    this.emitAuthStatus();
  }

  async emitAuthStatus() {
    const authStatus = await ApiStore.CheckAuth();
    console.log('user model: authStatus');
    if (authStatus === 401) {
      eventBus.emit(events.authPage.unauthorised, { data: 'signup' });
      return;
    }
    eventBus.emit(events.authPage.authorised, { data: 'login' });
  }

  userLogin = async (data) => {
    const email = data.loginForm.email.value.trim();
    const password = data.loginForm.password.value.trim();

    const res = await ApiStore.Login({ email, password });
    if (res.status !== 200) {
      eventBus.emit(events.authPage.badResponse);
      return;
    }
    eventBus.emit(events.authPage.authorised);
  };

  userSignup = async (data) => {
    const email = data.signupForm.email.value.trim();
    const username = data.signupForm.nickname.value.trim();
    const password = data.signupForm.primaryPassword.value.trim();
    const confirm_password = data.signupForm.confirmPassword.value.trim();

    const res = await ApiStore.Signup({
      username,
      email,
      password,
      confirm_password,
    });

    if (res !== undefined && !res.ok) {
      eventBus.emit(events.authPage.badResponse);
      return;
    }
    console.log('authorised');
    eventBus.emit(events.authPage.authorised);
  };
}
