import * as utils from '../../js/utils.js';
import { Enter } from './Enter.js';

const validatePassword = (password) => {
  if (password === '') {
    return utils.InvalidStatusType.EMPTY;
  }
  // TODO: if password != password in db return wrong pass

  return utils.InvalidStatusType.VALID;
};

const addValidationForForms = () => {
  utils.addValidationEmail();

  const passwordInput = document.getElementById('password-input');
  const passwordForm = document.querySelector('form');

  passwordInput.addEventListener('submit', (e) => {
    switch (validatePassword(e.target.value)) {
      // TODO: wrong password handler
      case utils.InvalidStatusType.EMPTY:
        passwordForm.querySelector('#bad-password').style.display = 'block';
        passwordForm.querySelector('#bad-password').innerHTML = 'Please enter the password!';
        break;
      case utils.InvalidStatusType.VALID:
        passwordForm.querySelector('#bad-password').style.display = 'none';
        break;
      default:
    }
  });
  passwordInput.addEventListener('input', () => {
    passwordForm.querySelector('#bad-password').style.display = 'none';
  });
};

export const Login = () => {
  const root = document.getElementById('root');
  root.innerHTML = '';

  const completeLoginForm = document.createElement('div');

  completeLoginForm.innerHTML = Enter({
    ENTER_TYPE: 'login',
    inputForms: [
      {
        labelname: 'Email',
        type: 'email',
        name: 'email',
        placeholder: 'Enter email',
      },
      {
        labelname: 'Password',
        type: 'password',
        name: 'password',
        placeholder: 'Enter password',
      },
    ],
  });
  root.appendChild(completeLoginForm);

  addValidationForForms();
};
