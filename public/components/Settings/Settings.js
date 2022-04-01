import { Settings } from './compiled/Settings.js';
// import {Auth} from "../Auth/compiled/Auth";

export const renderSettings = (context) => {
  const root = document.getElementById('root');

  const settingsPage = document.createElement('div');

  settingsPage.innerHTML = Settings({
    inputForms: [
      {
        labelname: 'Email',
        name: 'email',
        placeholder: 'idfurnl.ctfg@gmail.com',
      },
      {
        labelname: 'Nickname',
        name: 'nickname',
        placeholder: 'idfurnl',
      },
      {
        type: 'password',
        labelname: 'Change password',
        name: 'primaryPassword',
        placeholder: 'New password',
      },
    ],
  });
  root.appendChild(settingsPage);
};
