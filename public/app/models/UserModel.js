import { eventBus } from '../../modules/eventBus.js';
import { ApiStore } from '../../store/ApiStore.js';

export class UserModel {
  #login;

  #signup;

  constructor() {
    this.emitAuthStatus();

    // this.#login = ;

    // this.#signup = ;
  }

  async emitAuthStatus() {
    const hehe = await ApiStore.CheckAuth();
    console.log('user model: authStatus');
    if (hehe === 401) {
      eventBus.emit('unauthorized', { data: this.#signup });
      return;
    }

    eventBus.emit('authorized', { data: '' });
  }
}
