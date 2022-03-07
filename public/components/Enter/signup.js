import * as utils from '../../js/utils.js';
import {Enter} from './Enter.js';

const validateNickname = (nickname) => {
  if (nickname === '') {
    return utils.InvalidStatusType.EMPTY;
  }

  const nicknameRegex = /^[a-zA-Z0-9]+$/;
  if (!nicknameRegex.test(nickname)) {
    return utils.InvalidStatusType.WRONG_SYMBOLS;
  }
  // TODO: check nickname in db and return ALREADY_EXISTS status

  return utils.InvalidStatusType.VALID;
};

const addValidationNickname = () => {
  const nicknameInput = document.getElementById('nickname-input');
  const nicknameForm = document.querySelector('form');

  nicknameInput.addEventListener('focusout', (e) => {
    switch (validateNickname(e.target.value)) {
      case utils.InvalidStatusType.WRONG_SYMBOLS:
        nicknameForm.querySelector('#bad-nickname').style.display = 'block';
        nicknameForm.querySelector('#bad-nickname')
          .innerHTML = 'Your nickname should only contain alphanumeric characters';
        break;
      // TODO: ALREADY_EXISTS status handler
      case utils.InvalidStatusType.EMPTY:
        nicknameForm.querySelector('#bad-nickname').style.display = 'none';
        break;
      case utils.InvalidStatusType.VALID:
        nicknameForm.querySelector('#bad-nickname').style.display = 'none';
        break;
      default:
    }
  });
  nicknameInput.addEventListener('input', () => {
    nicknameForm.querySelector('#bad-nickname').style.display = 'none';
  });
};

const validatePasswordPrimary = (password) => {
  if (password === '') {
    return utils.InvalidStatusType.EMPTY;
  }
  const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,30}$/;
  if (!passwordRegex.test(password)) {
    return utils.InvalidStatusType.WRONG_SYMBOLS;
  }
  return utils.InvalidStatusType.VALID;
};

const addValidationPrimaryPassword = () => {
  const passwordInput = document.getElementById('primary-password-input');
  console.log(passwordInput);
  const passwordForm = document.querySelector('form');

  passwordInput.addEventListener('focusout', (e) => {
    switch (validatePasswordPrimary(e.target.value)) {
      case utils.InvalidStatusType.WRONG_SYMBOLS:
        passwordForm.querySelector('#bad-primary-password').style.display = 'block';
        passwordForm.querySelector('#bad-primary-password').innerHTML = 'Your password'
          + 'is unsafe!';
        break;
      case utils.InvalidStatusType.EMPTY:
        passwordForm.querySelector('#bad-primary-password').style.display = 'none';
        break;
      case utils.InvalidStatusType.VALID:
        passwordForm.querySelector('#bad-primary-password').style.display = 'none';
        break;
      default:
    }
  });
  passwordInput.addEventListener('input', () => {
    passwordForm.querySelector('#bad-primary-password').style.display = 'none';
  });
};

const validatePasswordConfirm = (passwordConfirm, primaryPassword) => {
  if (passwordConfirm === '') {
    return utils.InvalidStatusType.EMPTY;
  }
  if (passwordConfirm === primaryPassword) {
    return utils.InvalidStatusType.VALID;
  }
  return utils.InvalidStatusType.DO_NOT_MATCH;
};

const addValidationConfirmPassword = () => {
  const confirmPasswordInput = document.getElementById('confirm-password-input');
  const confirmPasswordForm = document.querySelector('form');

  confirmPasswordInput.addEventListener('focusout', (e) => {
    switch (validatePasswordConfirm(e.target.value,
      document.querySelector('#primary-password-input').value)) {
      case utils.InvalidStatusType.DO_NOT_MATCH:
        confirmPasswordForm.querySelector('#bad-confirm-password').style.display = 'block';
        confirmPasswordForm.querySelector('#bad-confirm-password').innerHTML = 'Passwords'
          + 'don\'t match';
        break;
      case utils.InvalidStatusType.EMPTY:
        confirmPasswordForm.querySelector('#bad-confirm-password').style.display = 'none';
        break;
      case utils.InvalidStatusType.VALID:
        confirmPasswordForm.querySelector('#bad-confirm-password').style.display = 'none';
        break;
      default:
    }
  });
  confirmPasswordInput.addEventListener('input', () => {
    confirmPasswordForm.querySelector('#bad-confirm-password').style.display = 'none';
  });
};

const addValidationForForms = () => {
  utils.addValidationEmail();
  addValidationNickname();
  addValidationPrimaryPassword();
  addValidationConfirmPassword();
};

export const Signup = () => {
  const root = document.getElementById('root');
  root.innerHTML = '';

  const completeSignupForm = document.createElement('div');

  completeSignupForm.innerHTML = Enter({
    ENTER_TYPE: 'signup',
    inputForms: [
      {
        labelname: 'Email',
        type: 'email',
        name: 'email',
        placeholder: 'Enter email',
      },
      {
        labelname: 'Nickname',
        type: 'nickname',
        name: 'nickname',
        placeholder: 'Enter your nickname',
      },
      {
        labelname: 'Password',
        type: 'password',
        name: 'primary-password',
        placeholder: 'Enter password',
      },
      {
        labelname: 'Confirm password',
        type: 'password',
        name: 'confirm-password',
        placeholder: 'Enter password again',
      },
    ],
  });

  root.appendChild(completeSignupForm);

  addValidationForForms();
};
