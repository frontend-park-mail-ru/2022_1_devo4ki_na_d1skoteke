import * as utils from './utils.js';

const getLogInTitle = () => {
  const logInTitle = document.createElement('div');
  logInTitle.classList.add('login-title');
  logInTitle.innerHTML = 'Log in';

  return logInTitle;
};

const createBadPasswordError = () => {
  const badPrimaryPasswordError = document.createElement('div');
  badPrimaryPasswordError.innerHTML = 'password is incorrect';
  badPrimaryPasswordError.classList.add('bad-input');
  badPrimaryPasswordError.id = 'bad-password';
  badPrimaryPasswordError.style.display = 'none';

  return badPrimaryPasswordError;
};

const createPasswordInput = () => {
  const passwordForm = document.createElement('div');
  passwordForm.classList.add('form');

  const passwordInput = utils.createInput('password', 'enter password', 'password');
  passwordInput.id = 'password-input';

  passwordForm.appendChild(utils.createLabel('Password'));
  passwordForm.appendChild(passwordInput);
  passwordForm.appendChild(createBadPasswordError());

  return passwordForm;
};

const createSignup = () => {
  const signUp = document.createElement('a');
  signUp.classList.add('new-signup');
  signUp.id = 'new-signup';
  signUp.href = 'signup';
  signUp.innerHTML = 'Don\'t have an account?';
  return signUp;
};

const createLoginButton = () => {
  const submitBtn = document.createElement('button');
  submitBtn.classList.add('submit-btn');
  submitBtn.tabIndex = 0;
  submitBtn.id = 'login-submit-button';
  submitBtn.type = 'submit';

  submitBtn.innerHTML = 'Login';

  return submitBtn;
};

const getLoginForm = () => {
  const loginForm = document.createElement('form');
  loginForm.classList.add('login-form');
  loginForm.id = 'login-form';

  loginForm.setAttribute('method', 'post');
  loginForm.setAttribute('action', ')');

  loginForm.appendChild(utils.createEmailInput());
  loginForm.appendChild(createPasswordInput());
  loginForm.appendChild(createLoginButton());
  loginForm.appendChild(createSignup());

  return loginForm;
};

export const Login = () => {
  const root = document.getElementById('root');
  root.innerHTML = '';

  const completeLoginForm = document.createElement('div');

  completeLoginForm.classList.add('login');
  completeLoginForm.appendChild(getLogInTitle());
  completeLoginForm.appendChild(getLoginForm());

  root.appendChild(completeLoginForm);
};
