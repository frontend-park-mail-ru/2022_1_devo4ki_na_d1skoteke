import { Settings } from './compiled/Settings.js';
import {
  addValidationForProfileEditForm, addPopupOpenCloseAbility, avatarHandler, popupClose,
} from '../../js/utils.js';
import '../../img/avatar-example.jpg';
import '../../img/settings__account-icon.svg';

export const renderSettings = (context) => {
  const root = document.getElementById('root');

  const settingsPopup = document.getElementById('settingsPopup');
  if (settingsPopup) {
    document.querySelector('.sidebar__username').innerHTML = context.username;
    document.getElementById('email-input').value = context.email;
    document.getElementById('nickname-input').value = context.username;
    document.getElementById('password-input').value = '';
    popupClose(document.querySelector('.popup.open'));
    return;
  }

  const settingsPage = document.createElement('div');

  const userAvatar = './assets/avatar-example.jpg';
  settingsPage.innerHTML = Settings({
    userInfo: {
      email: `${context.email}`,
      nickname: `${context.username}`,
      avatar: `${userAvatar}`,
    },
    inputForms: [
      {
        labelname: 'Email',
        name: 'email',
        placeholder: 'Enter email',
        default_value: `${context.email}`,
      },
      {
        labelname: 'Nickname',
        name: 'nickname',
        placeholder: 'Enter nickname',
        default_value: `${context.username}`,
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
};
