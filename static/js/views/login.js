import * as utils from './utils.js';

const getLogInTitle = () => {
  const logInTitle = document.createElement('div');
  logInTitle.classList.add('login-title');
  logInTitle.innerHTML = 'Log in';

  return logInTitle;
};

const createBadPasswordDiv = () => {
  const badPrimaryPasswordDiv = document.createElement('div');
  badPrimaryPasswordDiv.innerHTML = 'password is incorrect';
  badPrimaryPasswordDiv.classList.add('bad-input-div');
  badPrimaryPasswordDiv.id = 'bad-password-div';
  badPrimaryPasswordDiv.style.display = 'none';

  return badPrimaryPasswordDiv;
};

const createPasswordInput = () => {
  const passwordDiv = document.createElement('div');
  passwordDiv.classList.add('form-div');

  const passwordInput = utils.createInput('password', 'enter password', 'password');
  passwordInput.id = 'password-input';

  passwordDiv.appendChild(utils.createLabel('Password'));
  passwordDiv.appendChild(passwordInput);
  passwordDiv.appendChild(createBadPasswordDiv());

  return passwordDiv;
};

const createSignup = () => {
  const signUp = document.createElement('a');
  signUp.classList.add('new-signup');
  signUp.id = 'new-signup';
  signUp.href = '/signup';
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

export default () => {
  const root = document.getElementById('root');
  root.innerHTML = '';

  const loginDiv = document.createElement('div');

  loginDiv.classList.add('login-div');
  loginDiv.appendChild(getLogInTitle());
  loginDiv.appendChild(getLoginForm());

  const terms = utils.createLabel('By clicking “Login” above, you acknowledge that you have read and understood, '
    + 'and agree to Notion\'s terms & conditions and Privacy Policy .');
  terms.style.textAlign = 'center';
  terms.style.marginLeft = 'auto';
  loginDiv.appendChild(terms);

  root.appendChild(loginDiv);
};
