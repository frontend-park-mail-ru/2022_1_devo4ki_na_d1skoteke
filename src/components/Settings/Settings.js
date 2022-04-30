import { Settings } from './compiled/Settings.js';
import {
  addValidationForProfileEditForm, addPopupOpenCloseAbility, avatarHandler, popupClose,
} from '../../js/utils.js';
import '../../img/avatar-example.jpg';
import '../../img/settings__account-icon.svg';
import { eventBus } from '../../modules/eventBus';
import { events } from '../../consts/events';

export const renderSettings = (context) => {
  const root = document.getElementById('root');

  const settingsPopup = document.getElementById('settingsPopup');
  if (settingsPopup) {
    document.querySelector('.sidebar__username').innerHTML = context.userData.username;
    document.querySelector('.bio__name').innerHTML = `${context.userData.username}'s Cotion`;
    document.getElementById('email-input').value = context.userData.email;
    document.getElementById('nickname-input').value = context.userData.username;
    document.getElementById('password-input').value = '';
    popupClose(document.querySelector('.popup.open'));
    return;
  }

  const settingsPage = document.createElement('div');

  // const userAvatar = './assets/avatar-example.jpg';
  settingsPage.innerHTML = Settings({
    userInfo: {
      email: `${context.userData.email}`,
      nickname: `${context.userData.username}`,
      avatar: `${context.avatarUrl}`,
    },
    inputForms: [
      {
        labelname: 'Email',
        name: 'email',
        placeholder: 'Enter email',
        default_value: `${context.userData.email}`,
      },
      {
        labelname: 'Nickname',
        name: 'nickname',
        placeholder: 'Enter nickname',
        default_value: `${context.userData.username}`,
      },
      {
        type: 'password',
        labelname: 'Change password',
        name: 'password',
        placeholder: 'New password',
      },
    ],
  });
  root.appendChild(settingsPage);

  addValidationForProfileEditForm();
  addPopupOpenCloseAbility();
  avatarHandler();
  logoutHandler();
};

const logoutHandler = () => {
  const logoutButtons = document.querySelectorAll('.logout');
  logoutButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      eventBus.emit(events.notesPage.logout);
    });
  });
};