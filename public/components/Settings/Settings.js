import { Settings } from './compiled/Settings.js';
import { addValidationForProfileEditForm, addPopupOpenCloseAbility } from '../../js/utils.js';

export const renderSettings = (context) => {
  const root = document.getElementById('root');

  const settingsPage = document.createElement('div');

  settingsPage.innerHTML = Settings(context);
  root.appendChild(settingsPage);

  addValidationForProfileEditForm();
  addPopupOpenCloseAbility();
};
