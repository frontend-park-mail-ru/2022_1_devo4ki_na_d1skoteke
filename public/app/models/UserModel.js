import { eventBus } from '../../modules/eventBus.js';
import { ApiStore } from '../../store/ApiStore';

class UserModel {
  #login;

  #signup;

  constructor() {
    this.emitAuthStatus();

    this.#login = {
      ENTER_TYPE: 'login',
      inputForms: [
        {
          labelname: 'Email',
          name: 'email',
          placeholder: 'Enter email',
        },
        {
          type: 'password',
          labelname: 'Password',
          name: 'password',
          placeholder: 'Enter password',
        },
      ],
    };

    this.#signup = {
      ENTER_TYPE: 'signup',
      inputForms: [
        {
          labelname: 'Email',
          name: 'email',
          placeholder: 'Enter email',
        },
        {
          labelname: 'Nickname',
          name: 'nickname',
          placeholder: 'Enter your nickname',
        },
        {
          type: 'password',
          labelname: 'Password',
          name: 'primaryPassword',
          placeholder: 'Enter password',
        },
        {
          type: 'password',
          labelname: 'Confirm password',
          name: 'confirmPassword',
          placeholder: 'Enter password again',
        },
      ],
    };
  }

  async emitAuthStatus() {
    const hehe = await ApiStore.CheckAuth();
    // eventBus
    if (hehe === 401) {
      eventBus.emit('unauthorized', { data: '' });
      return;
    }

    eventBus.emit('authorized', { data: '' });
  }
}
