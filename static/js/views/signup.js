import * as utils from './utils.js';

const getSignUpTitle = () => {
  const signUpTitle = document.createElement('div');
  signUpTitle.classList.add('signup-title');
  signUpTitle.innerHTML = 'Sign Up';

  return signUpTitle;
};

const createBadNicknameDiv = () => {
  const badNicknameDiv = document.createElement('div');
  badNicknameDiv.classList.add('bad-input-div');
  badNicknameDiv.id = 'bad-nickname-div';
  badNicknameDiv.style.display = 'none';

  return badNicknameDiv;
};

const validateNickname = (nickname) => {
  if (nickname === '') {
    return utils.InvalidStatusType.EMPTY;
  }

  const nicknameRegex = /^[a-zA-Z0-9]+$/;
  if (!nicknameRegex.test(nickname)) {
    return utils.InvalidStatusType.WRONG_SYMBOLS;
  }
  // будет в будущем
  // if (nicknameDatabaseCheck(nickname)){
  //   return invalidStatusType.ALREADY_EXISTS
  // }

  return utils.InvalidStatusType.VALID;
};

const createNicknameInput = () => {
  const nicknameDiv = document.createElement('div');
  nicknameDiv.classList.add('form-div');

  const nicknameInput = utils.createInput('nickname', 'enter yourn nickname', 'nickname');
  nicknameInput.id = 'nickname-input';

  nicknameDiv.appendChild(utils.createLabel('Nickname'));
  nicknameDiv.appendChild(nicknameInput);
  nicknameDiv.appendChild(createBadNicknameDiv());

  nicknameInput.addEventListener('input', (e) => {
    switch (validateNickname(e.target.value)) {
      case utils.InvalidStatusType.WRONG_SYMBOLS:
        nicknameDiv.querySelector('#bad-nickname-div').style.display = 'block';
        nicknameDiv.querySelector('#bad-nickname-div')
          .innerHTML = 'your nickname should only contain alphanumeric characters';
        break;
      // case invalidStatusType.ALREADY_EXISTS:
      //   nicknameDiv.querySelector('#bad-nickname-div').style.display = 'block';
      //   nicknameDiv.querySelector('#bad-nickname-div')
      //    .innerHTML = 'your nickname is already in use, please choose another one';
      //   break;
      case utils.InvalidStatusType.EMPTY:
        nicknameDiv.querySelector('#bad-nickname-div').style.display = 'none';
        break;
      case utils.InvalidStatusType.VALID:
        nicknameDiv.querySelector('#bad-nickname-div').style.display = 'none';
        break;
      default:
    }
  });
  return nicknameDiv;
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

const createBadPrimaryPasswordDiv = () => {
  const badPrimaryPasswordDiv = document.createElement('div');
  badPrimaryPasswordDiv.innerHTML = 'password is unsafe\n '
    + 'it should contain from 7 to 15 characters with at least one numeric digit and a special character';
  badPrimaryPasswordDiv.classList.add('bad-input-div');
  badPrimaryPasswordDiv.id = 'bad-passwordPrimary-div';
  badPrimaryPasswordDiv.style.display = 'none';

  return badPrimaryPasswordDiv;
};

const createBadConfirmPasswordDiv = () => {
  const badSecondaryPasswordDiv = document.createElement('div');
  badSecondaryPasswordDiv.innerHTML = 'passwords don\'t match';
  badSecondaryPasswordDiv.classList.add('bad-input-div');
  badSecondaryPasswordDiv.id = 'bad-passwordConfirm-div';
  badSecondaryPasswordDiv.style.display = 'none';

  return badSecondaryPasswordDiv;
};

const createPrimaryPasswordInput = () => {
  const passwordDiv = document.createElement('div');
  passwordDiv.classList.add('form-div');

  const passwordInput = utils.createInput('password', 'enter password', 'password');
  passwordInput.id = 'primary-password-input';

  passwordDiv.appendChild(utils.createLabel('Password'));
  passwordDiv.appendChild(passwordInput);
  passwordDiv.appendChild(createBadPrimaryPasswordDiv());

  passwordInput.addEventListener('input', (e) => {
    switch (validatePasswordPrimary(e.target.value)) {
      case utils.InvalidStatusType.WRONG_SYMBOLS:
        passwordDiv.querySelector('#bad-passwordPrimary-div').style.display = 'block';
        passwordDiv.querySelector('#bad-passwordPrimary-div').innerHTML = 'your password is unsafe!!\n\t '
          + 'it should contain from 7 to 15 characters with at least one numeric digit and a special character';
        break;
      case utils.InvalidStatusType.EMPTY:
        passwordDiv.querySelector('#bad-passwordPrimary-div').style.display = 'none';
        break;
      case utils.InvalidStatusType.VALID:
        passwordDiv.querySelector('#bad-passwordPrimary-div').style.display = 'none';
        break;
      default:
    }
  });
  return passwordDiv;
};

const createConfirmPasswordInput = () => {
  const confirmPasswordDiv = document.createElement('div');
  confirmPasswordDiv.classList.add('form-div');

  const confirmPasswordInput = utils.createInput('password', 'enter password', 'password');
  confirmPasswordInput.id = 'confirm-password-input';

  confirmPasswordDiv.appendChild(utils.createLabel('Confirm password'));
  confirmPasswordDiv.appendChild(confirmPasswordInput);
  confirmPasswordDiv.appendChild(createBadConfirmPasswordDiv());

  confirmPasswordInput.addEventListener('input', (e) => {
    switch (validatePasswordConfirm(e.target.value, document.querySelector('#primary-password-input').value)) {
      case utils.InvalidStatusType.DO_NOT_MATCH:
        confirmPasswordDiv.querySelector('#bad-passwordConfirm-div').style.display = 'block';
        confirmPasswordDiv.querySelector('#bad-passwordConfirm-div').innerHTML = 'password dont match';
        break;
      case utils.InvalidStatusType.EMPTY:
        confirmPasswordDiv.querySelector('#bad-passwordConfirm-div').style.display = 'none';
        break;
      case utils.InvalidStatusType.VALID:
        confirmPasswordDiv.querySelector('#bad-passwordConfirm-div').style.display = 'none';
        break;
      default:
    }
  });
  return confirmPasswordDiv;
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
  havaAccount.href = '/login';
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

export default () => {
  const root = document.getElementById('root');
  root.innerHTML = '';

  const loginDiv = document.createElement('div');

  loginDiv.classList.add('signup-div');
  loginDiv.appendChild(getSignUpTitle());
  loginDiv.appendChild(getSignUpForm());

  root.appendChild(loginDiv);
};
