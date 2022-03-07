// import * as utils from '../../js/utils.js';
import { Enter } from './Enter.js';

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
        name: 'primary-password',
        placeholder: 'Enter password again',
      },
    ],
  });
  // completeSignupForm.classList.add('signup');
  // completeSignupForm.appendChild(utils.createLogo());
  // completeSignupForm.appendChild(getSignUpTitle());
  // completeSignupForm.appendChild(getSignUpForm());

  root.appendChild(completeSignupForm);
};

// ________OLD CODE_______________
// const getSignUpTitle = () => {
//   const signUpTitle = document.createElement('div');
//   signUpTitle.classList.add('signup-title');
//   signUpTitle.innerHTML = 'Sign Up';
//
//   return signUpTitle;
// };
//
// const createBadNicknameError = () => {
//   const badNicknameError = document.createElement('div');
//   badNicknameError.classList.add('bad-input');
//   badNicknameError.id = 'bad-nickname';
//   badNicknameError.style.display = 'none';
//
//   return badNicknameError;
// };
//
// const validateNickname = (nickname) => {
//   if (nickname === '') {
//     return utils.InvalidStatusType.EMPTY;
//   }
//
//   const nicknameRegex = /^[a-zA-Z0-9]+$/;
//   if (!nicknameRegex.test(nickname)) {
//     return utils.InvalidStatusType.WRONG_SYMBOLS;
//   }
//   // TODO: check nickname in db and return ALREADY_EXISTS status
//
//   return utils.InvalidStatusType.VALID;
// };
//
// const createNicknameInput = () => {
//   const nicknameForm = document.createElement('div');
//   nicknameForm.classList.add('form');
//
//   const nicknameInput = utils.createInput('nickname', 'Enter your nickname', 'nickname');
//   nicknameInput.id = 'nickname-input';
//
//   nicknameForm.appendChild(utils.createLabel('Nickname'));
//   nicknameForm.appendChild(nicknameInput);
//   nicknameForm.appendChild(createBadNicknameError());
//
//   nicknameInput.addEventListener('focusout', (e) => {
//     switch (validateNickname(e.target.value)) {
//       case utils.InvalidStatusType.WRONG_SYMBOLS:
//         nicknameForm.querySelector('#bad-nickname').style.display = 'block';
//         nicknameForm.querySelector('#bad-nickname')
//           .innerHTML = 'Your nickname should only contain alphanumeric characters';
//         break;
//       // TODO: ALREADY_EXISTS status handler
//       case utils.InvalidStatusType.EMPTY:
//         nicknameForm.querySelector('#bad-nickname').style.display = 'none';
//         break;
//       case utils.InvalidStatusType.VALID:
//         nicknameForm.querySelector('#bad-nickname').style.display = 'none';
//         break;
//       default:
//     }
//   });
//   nicknameInput.addEventListener('input', () => {
//     nicknameForm.querySelector('#bad-nickname').style.display = 'none';
//   });
//   return nicknameForm;
// };
//
// const validatePasswordPrimary = (password) => {
//   if (password === '') {
//     return utils.InvalidStatusType.EMPTY;
//   }
//   const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,30}$/;
//   if (!passwordRegex.test(password)) {
//     return utils.InvalidStatusType.WRONG_SYMBOLS;
//   }
//   return utils.InvalidStatusType.VALID;
// };
//
// const validatePasswordConfirm = (passwordConfirm, primaryPassword) => {
//   if (passwordConfirm === '') {
//     return utils.InvalidStatusType.EMPTY;
//   }
//   if (passwordConfirm === primaryPassword) {
//     return utils.InvalidStatusType.VALID;
//   }
//   return utils.InvalidStatusType.DO_NOT_MATCH;
// };
//
// const createBadPrimaryPasswordError = () => {
//   const badPrimaryPasswordError = document.createElement('div');
//   badPrimaryPasswordError.innerHTML = 'Your password is unsafe!\n ';
//   badPrimaryPasswordError.classList.add('bad-input');
//   badPrimaryPasswordError.id = 'bad-passwordPrimary';
//   badPrimaryPasswordError.style.display = 'none';
//
//   return badPrimaryPasswordError;
// };
//
// const createBadConfirmPasswordError = () => {
//   const badSecondaryPasswordError = document.createElement('div');
//   badSecondaryPasswordError.innerHTML = 'Passwords don\'t match';
//   badSecondaryPasswordError.classList.add('bad-input');
//   badSecondaryPasswordError.id = 'bad-passwordConfirm';
//   badSecondaryPasswordError.style.display = 'none';
//
//   return badSecondaryPasswordError;
// };
//
// const createPrimaryPasswordInput = () => {
//   const passwordForm = document.createElement('div');
//   passwordForm.classList.add('form');
//
//   const passwordInput = utils.createInput('password', 'Enter password', 'password');
//   passwordInput.id = 'primary-password-input';
//
//   passwordForm.appendChild(utils.createLabel('Password'));
//   passwordForm.appendChild(passwordInput);
//   passwordForm.appendChild(createBadPrimaryPasswordError());
//
//   passwordInput.addEventListener('focusout', (e) => {
//     switch (validatePasswordPrimary(e.target.value)) {
//       case utils.InvalidStatusType.WRONG_SYMBOLS:
//         passwordForm.querySelector('#bad-passwordPrimary').style.display = 'block';
//         passwordForm.querySelector('#bad-passwordPrimary').innerHTML = 'Your password'
//         + 'is unsafe!';
//         break;
//       case utils.InvalidStatusType.EMPTY:
//         passwordForm.querySelector('#bad-passwordPrimary').style.display = 'none';
//         break;
//       case utils.InvalidStatusType.VALID:
//         passwordForm.querySelector('#bad-passwordPrimary').style.display = 'none';
//         break;
//       default:
//     }
//   });
//   passwordInput.addEventListener('input', () => {
//     passwordForm.querySelector('#bad-passwordPrimary').style.display = 'none';
//   });
//   return passwordForm;
// };
//
// const createConfirmPasswordInput = () => {
//   const confirmPasswordForm = document.createElement('div');
//   confirmPasswordForm.classList.add('form');
//
//   const confirmPasswordInput = utils.createInput('password', 'Enter password again', 'password');
//   confirmPasswordInput.id = 'confirm-password-input';
//
//   confirmPasswordForm.appendChild(utils.createLabel('Confirm password'));
//   confirmPasswordForm.appendChild(confirmPasswordInput);
//   confirmPasswordForm.appendChild(createBadConfirmPasswordError());
//
//   confirmPasswordInput.addEventListener('focusout', (e) => {
//     switch (validatePasswordConfirm(e.target.value,
//     document.querySelector('#primary-password-input').value)) {
//       case utils.InvalidStatusType.DO_NOT_MATCH:
//         confirmPasswordForm.querySelector('#bad-passwordConfirm').style.display = 'block';
//         confirmPasswordForm.querySelector('#bad-passwordConfirm').innerHTML = 'Passwords'
//         +'don\'t match';
//         break;
//       case utils.InvalidStatusType.EMPTY:
//         confirmPasswordForm.querySelector('#bad-passwordConfirm').style.display = 'none';
//         break;
//       case utils.InvalidStatusType.VALID:
//         confirmPasswordForm.querySelector('#bad-passwordConfirm').style.display = 'none';
//         break;
//       default:
//     }
//   });
//   confirmPasswordInput.addEventListener('input', () => {
//     confirmPasswordForm.querySelector('#bad-passwordConfirm').style.display = 'none';
//   });
//   return confirmPasswordForm;
// };
//
// const createSignUpButton = () => {
//   const submitBtn = document.createElement('button');
//   submitBtn.classList.add('submit-btn');
//   submitBtn.tabIndex = 0;
//   submitBtn.id = 'signup-submit-button';
//   submitBtn.type = 'submit';
//   submitBtn.innerHTML = 'Sign Up';
//
//   return submitBtn;
// };
// const createHaveAccount = () => {
//   const havaAccount = document.createElement('a');
//   havaAccount.classList.add('have-account');
//   havaAccount.href = 'login';
//   havaAccount.innerHTML = 'I already have an account';
//   return havaAccount;
// };
//
// const getSignUpForm = () => {
//   const signUpForm = document.createElement('form');
//   signUpForm.classList.add('signup-form');
//
//   signUpForm.setAttribute('method', 'post');
//   signUpForm.setAttribute('action', ')');
//
//   signUpForm.appendChild(utils.createEmailInput());
//   signUpForm.appendChild(createNicknameInput());
//   signUpForm.appendChild(createPrimaryPasswordInput());
//
//   signUpForm.appendChild(createConfirmPasswordInput());
//
//   signUpForm.appendChild(createSignUpButton());
//   signUpForm.appendChild(createHaveAccount());
//
//   return signUpForm;
// };
