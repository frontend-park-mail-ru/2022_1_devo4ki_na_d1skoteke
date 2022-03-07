import * as utils from '../../js/utils.js';
import { Enter } from './compiled/Enter.js';

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
  const passwordInput = document.getElementById('primaryPassword-input');
  const passwordForm = document.querySelector('form');

  passwordForm.querySelector('#bad-primaryPassword').style.display = 'none';
  passwordInput.addEventListener('focusout', (e) => {
    switch (validatePasswordPrimary(e.target.value)) {
      case utils.InvalidStatusType.WRONG_SYMBOLS:
        passwordForm.querySelector('#bad-primaryPassword').style.display = 'block';
        passwordForm.querySelector('#bad-primaryPassword').innerHTML = 'Your password '
          + 'is unsafe!';
        break;
      case utils.InvalidStatusType.EMPTY:
        passwordForm.querySelector('#bad-primaryPassword').style.display = 'none';
        break;
      case utils.InvalidStatusType.VALID:
        passwordForm.querySelector('#bad-primaryPassword').style.display = 'none';
        break;
      default:
        passwordForm.querySelector('#bad-primaryPassword').style.display = 'none';
    }
  });
  passwordInput.addEventListener('input', () => {
    passwordForm.querySelector('#bad-primaryPassword').style.display = 'none';
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
  const confirmPasswordInput = document.getElementById('confirmPassword-input');
  const confirmPasswordForm = document.querySelector('form');

  confirmPasswordForm.querySelector('#bad-confirmPassword').style.display = 'none';
  confirmPasswordInput.addEventListener('focusout', (e) => {
    switch (validatePasswordConfirm(
      e.target.value,
      document.querySelector('#primaryPassword-input').value,
    )) {
      case utils.InvalidStatusType.DO_NOT_MATCH:
        confirmPasswordForm.querySelector('#bad-confirmPassword').style.display = 'block';
        confirmPasswordForm.querySelector('#bad-confirmPassword').innerHTML = 'Passwords '
          + 'don\'t match';
        break;
      case utils.InvalidStatusType.EMPTY:
        confirmPasswordForm.querySelector('#bad-confirmPassword').style.display = 'none';
        break;
      case utils.InvalidStatusType.VALID:
        confirmPasswordForm.querySelector('#bad-confirmPassword').style.display = 'none';
        break;
      default:
        confirmPasswordForm.querySelector('#bad-confirmPassword').style.display = 'none';
    }
  });
  confirmPasswordInput.addEventListener('input', () => {
    confirmPasswordForm.querySelector('#bad-confirmPassword').style.display = 'none';
  });
};

const addValidationForForms = () => {
  utils.addValidationEmail();
  addValidationNickname();
  addValidationPrimaryPassword();
  addValidationConfirmPassword();
};

export const Signup = (context) => {
  const root = document.getElementById('root');
  root.innerHTML = '';

  const completeSignupForm = document.createElement('div');

  completeSignupForm.innerHTML = Enter(context);
  root.appendChild(completeSignupForm);

  addValidationForForms();
};
