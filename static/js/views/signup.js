import * as utils from './utils.js';

const getSignUpTitle = () => {
  const signUpTitle = document.createElement('div');
  signUpTitle.classList.add('signup-title');
  signUpTitle.innerHTML = 'Sign Up';

  return signUpTitle;
};

const createBadNicknameError = () => {
  const badNicknameError = document.createElement('div');
  badNicknameError.classList.add('bad-input');
  badNicknameError.id = 'bad-nickname';
  badNicknameError.style.display = 'none';

  return badNicknameError;
};

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

const createNicknameInput = () => {
  const nicknameForm = document.createElement('div');
  nicknameForm.classList.add('form');

  const nicknameInput = utils.createInput('nickname', 'enter yourn nickname', 'nickname');
  nicknameInput.id = 'nickname-input';

  nicknameForm.appendChild(utils.createLabel('Nickname'));
  nicknameForm.appendChild(nicknameInput);
  nicknameForm.appendChild(createBadNicknameError());

  nicknameInput.addEventListener('input', (e) => {
    switch (validateNickname(e.target.value)) {
      case utils.InvalidStatusType.WRONG_SYMBOLS:
        nicknameForm.querySelector('#bad-nickname').style.display = 'block';
        nicknameForm.querySelector('#bad-nickname')
          .innerHTML = 'your nickname should only contain alphanumeric characters';
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
  return nicknameForm;
};

const validatePasswordPrimary = (password) => {
  if (password === '') {
    return utils.InvalidStatusType.EMPTY;
  }
  const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
  if (!passwordRegex.test(password)) {
    return utils.InvalidStatusType.WRONG_SYMBOLS;
  }
  return utils.InvalidStatusType.VALID;
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

const createBadPrimaryPasswordError = () => {
  const badPrimaryPasswordError = document.createElement('div');
  badPrimaryPasswordError.innerHTML = 'password is unsafe\n '
    + 'it should contain from 7 to 15 characters with at least one numeric digit and a special character';
  badPrimaryPasswordError.classList.add('bad-input');
  badPrimaryPasswordError.id = 'bad-passwordPrimary';
  badPrimaryPasswordError.style.display = 'none';

  return badPrimaryPasswordError;
};

const createBadConfirmPasswordError = () => {
  const badSecondaryPasswordError = document.createElement('div');
  badSecondaryPasswordError.innerHTML = 'passwords don\'t match';
  badSecondaryPasswordError.classList.add('bad-input');
  badSecondaryPasswordError.id = 'bad-passwordConfirm';
  badSecondaryPasswordError.style.display = 'none';

  return badSecondaryPasswordError;
};

const createPrimaryPasswordInput = () => {
  const passwordForm = document.createElement('div');
  passwordForm.classList.add('form');

  const passwordInput = utils.createInput('password', 'enter password', 'password');
  passwordInput.id = 'primary-password-input';

  passwordForm.appendChild(utils.createLabel('Password'));
  passwordForm.appendChild(passwordInput);
  passwordForm.appendChild(createBadPrimaryPasswordError());

  passwordInput.addEventListener('input', (e) => {
    switch (validatePasswordPrimary(e.target.value)) {
      case utils.InvalidStatusType.WRONG_SYMBOLS:
        passwordForm.querySelector('#bad-passwordPrimary').style.display = 'block';
        passwordForm.querySelector('#bad-passwordPrimary').innerHTML = 'your password is unsafe!!\n\t '
          + 'it should contain from 7 to 15 characters with at least one numeric digit and a special character';
        break;
      case utils.InvalidStatusType.EMPTY:
        passwordForm.querySelector('#bad-passwordPrimary').style.display = 'none';
        break;
      case utils.InvalidStatusType.VALID:
        passwordForm.querySelector('#bad-passwordPrimary').style.display = 'none';
        break;
      default:
    }
  });
  return passwordForm;
};

const createConfirmPasswordInput = () => {
  const confirmPasswordForm = document.createElement('div');
  confirmPasswordForm.classList.add('form');

  const confirmPasswordInput = utils.createInput('password', 'enter password', 'password');
  confirmPasswordInput.id = 'confirm-password-input';

  confirmPasswordForm.appendChild(utils.createLabel('Confirm password'));
  confirmPasswordForm.appendChild(confirmPasswordInput);
  confirmPasswordForm.appendChild(createBadConfirmPasswordError());

  confirmPasswordInput.addEventListener('input', (e) => {
    switch (validatePasswordConfirm(e.target.value, document.querySelector('#primary-password-input').value)) {
      case utils.InvalidStatusType.DO_NOT_MATCH:
        confirmPasswordForm.querySelector('#bad-passwordConfirm').style.display = 'block';
        confirmPasswordForm.querySelector('#bad-passwordConfirm').innerHTML = 'password dont match';
        break;
      case utils.InvalidStatusType.EMPTY:
        confirmPasswordForm.querySelector('#bad-passwordConfirm').style.display = 'none';
        break;
      case utils.InvalidStatusType.VALID:
        confirmPasswordForm.querySelector('#bad-passwordConfirm').style.display = 'none';
        break;
      default:
    }
  });
  return confirmPasswordForm;
};

const createSignUpButton = () => {
  const submitBtn = document.createElement('div');
  submitBtn.classList.add('submit-btn');
  submitBtn.tabIndex = 0;
  submitBtn.id = 'signup-submit-button';
  submitBtn.type = 'submit';
  submitBtn.innerHTML = 'Signup';

  return submitBtn;
};
const createHaveAccount = () => {
  const havaAccount = document.createElement('a');
  havaAccount.classList.add('have-account');
  havaAccount.href = 'login';
  havaAccount.innerHTML = 'I already have an account';
  return havaAccount;
};

const getSignUpForm = () => {
  const signUpForm = document.createElement('form');
  signUpForm.classList.add('signup-form');

  signUpForm.setAttribute('method', 'post');
  signUpForm.setAttribute('action', ')');

  signUpForm.appendChild(utils.createEmailInput());
  signUpForm.appendChild(createNicknameInput());
  signUpForm.appendChild(createPrimaryPasswordInput());

  signUpForm.appendChild(createConfirmPasswordInput());

  signUpForm.appendChild(createSignUpButton());
  signUpForm.appendChild(createHaveAccount());

  return signUpForm;
};

export const Signup = () => {
  const root = document.getElementById('root');
  root.innerHTML = '';

  const completeSignupForm = document.createElement('div');

  completeSignupForm.classList.add('signup');
  completeSignupForm.appendChild(getSignUpTitle());
  completeSignupForm.appendChild(getSignUpForm());

  root.appendChild(completeSignupForm);
};
