import { BaseView } from './BaseView.js';
import { events } from '../../consts/events.js';
import {renderAuthPage} from '../../components/Auth/Auth.js';

export class AuthView extends BaseView {
  constructor(eventBus, { data = {} } = {}) {
    super(eventBus, data);
  }

  // emitGetContent = () => {
  //   this.eventBus.emit(events.authPage.getContent, this.routeData);
  // };

  /**
   * @description Отрисовывает контент страницы авторизации / регистрации.
   * @param { Object } data Данные для формы авторизации / регистрации:
   * количество полей ввода и их названия
   */
  render = (data) => {
    // this._data = data;
    // const template = authContent(this._data);
    // const content = document.querySelector('.content');
    // if (content) {
    //   content.innerHTML = template;
    //   this.addValidateListeners();
    //   this.addSubmitListener();
    // } else {
    //   this.eventBus.emit(events.app.errorPage);
    // }
    if (data === 'signup') {
      renderAuthPage({
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
      });
    }
    console.log('AuthView data:', data);
    renderAuthPage({
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
    });
  };
}
