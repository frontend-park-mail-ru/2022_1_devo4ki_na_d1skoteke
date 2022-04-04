import { Settings } from './compiled/Settings.js';
import { addValidationForProfileEditForm, addPopupOpenCloseAbility } from '../../js/utils.js';

export const renderSettings = (context) => {
  const root = document.getElementById('root');

  const settingsPage = document.createElement('div');

  settingsPage.innerHTML = Settings(context);
  root.appendChild(settingsPage);

  addValidationForProfileEditForm();
  addPopupOpenCloseAbility();
  
  const avatar = document.getElementById('avatar');
  const mediaFile = document.getElementById('mediaFile');
  if (avatar.getAttribute('dataset-name') !== '') {
    avatar.style.backgroundImage = `url(${avatar.getAttribute('dataset-name')})`;
    avatar.classList.add('hasImage');
  }

  avatar.addEventListener('dragover', () => {
    avatar.classList.add('dragging');
  });
  avatar.addEventListener('dragleave', () => {
    avatar.classList.remove('dragging');
  });
  avatar.addEventListener('drop', (event) => {
    avatar.classList.remove('dragging');
    avatar.classList.remove('hasImage');
    if (event) {
      const file = event.dataTransfer.files[0];

      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        avatar.style.backgroundImage = `url(${reader.result})`;
        avatar.classList.add('hasImage');
      };
    }
  });

  avatar.addEventListener('click', () => {
    mediaFile.click();
  });

  ['dragover', 'drop'].forEach((type) => (
    window.addEventListener(type, (e) => {
      e.preventDefault();
    })
  ));

  mediaFile.addEventListener('change', (e) => {
    const { target } = e;
    if (target.files && target.files[0]) {
      const file = target.files[0];

      const reader = new FileReader();

      reader.readAsDataURL(file);
      reader.onload = () => {
        avatar.style.backgroundImage = `url(${reader.result})`;
        avatar.classList.add('hasImage');
      };
    }
  });
};
