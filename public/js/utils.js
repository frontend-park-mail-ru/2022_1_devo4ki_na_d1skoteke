const InvalidStatusType = {
  WRONG_SYMBOLS: 'invalid',
  PASS_WRONG_LENGTH: 'wrong length',
  DO_NOT_MATCH: 'don\'t match',
  EMPTY: 'empty',
  VALID: 'valid',
};

/** Sets favicon of our application */
export const SetFavicon = () => {
  const addFavicon = document.createElement('link');
  addFavicon.setAttribute('rel', 'icon');
  addFavicon.setAttribute('href', './img/favicon.ico');

  document.querySelector('head').insertBefore(addFavicon, document.querySelector('title').nextSibling);
};

const validateEmail = (email) => {
  if (email === '') {
    return InvalidStatusType.EMPTY;
  }

  const emailRegex = /^([a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?)$/;
  if (!emailRegex.test(email)) {
    return InvalidStatusType.WRONG_SYMBOLS;
  }

  return InvalidStatusType.VALID;
};

const addValidationEmail = () => {
  const emailInput = document.getElementById('email-input');
  const emailForm = document.querySelector('form');

  emailForm.querySelector('#bad-email').style.display = 'none';
  emailInput.addEventListener('focusout', (e) => {
    switch (validateEmail(e.target.value)) {
      case InvalidStatusType.WRONG_SYMBOLS:
        emailForm.querySelector('#bad-email').style.display = 'block';
        emailForm.querySelector('#bad-email')
          .innerHTML = 'Please enter valid email';
        break;
      case InvalidStatusType.EMPTY:
        emailForm.querySelector('#bad-email').style.display = 'block';
        emailForm.querySelector('#bad-email').innerHTML = 'You forgot to enter email';
        break;
      case InvalidStatusType.VALID:
        emailForm.querySelector('#bad-email').style.display = 'none';
        break;
      default:
    }
  });
  emailInput.addEventListener('input', () => {
    emailForm.querySelector('#bad-email').style.display = 'none';
  });
};

const validateNickname = (nickname) => {
  if (nickname === '') {
    return InvalidStatusType.EMPTY;
  }

  const nicknameRegex = /^[a-zA-Z0-9]+$/;
  if (!nicknameRegex.test(nickname)) {
    return InvalidStatusType.WRONG_SYMBOLS;
  }

  return InvalidStatusType.VALID;
};

const addValidationNickname = () => {
  const nicknameInput = document.getElementById('nickname-input');
  const nicknameForm = document.querySelector('form');

  nicknameForm.querySelector('#bad-nickname').style.display = 'none';
  nicknameInput.addEventListener('focusout', (e) => {
    switch (validateNickname(e.target.value)) {
      case InvalidStatusType.WRONG_SYMBOLS:
        nicknameForm.querySelector('#bad-nickname').style.display = 'block';
        nicknameForm.querySelector('#bad-nickname')
          .innerHTML = 'Your nickname should only contain alphanumeric characters';
        break;
      case InvalidStatusType.EMPTY:
        nicknameForm.querySelector('#bad-nickname').style.display = 'block';
        nicknameForm.querySelector('#bad-nickname').innerHTML = 'You forgot to enter nickname';
        break;
      case InvalidStatusType.VALID:
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
    return InvalidStatusType.EMPTY;
  }
  if (password.length < 7 || password.length > 30) {
    return InvalidStatusType.PASS_WRONG_LENGTH;
  }
  const passwordRegex = /^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{7,30}$/;
  if (!passwordRegex.test(password)) {
    return InvalidStatusType.WRONG_SYMBOLS;
  }
  return InvalidStatusType.VALID;
};

const addValidationPrimaryPassword = () => {
  const passwordInput = document.getElementById('primaryPassword-input');
  const passwordForm = document.querySelector('form');

  passwordForm.querySelector('#bad-primaryPassword').style.display = 'none';
  passwordInput.addEventListener('focusout', (e) => {
    switch (validatePasswordPrimary(e.target.value)) {
      case InvalidStatusType.WRONG_SYMBOLS:
        passwordForm.querySelector('#bad-primaryPassword').style.display = 'block';
        passwordForm.querySelector('#bad-primaryPassword').innerHTML = 'Password must have at least '
          + 'one letter and digit';
        break;
      case InvalidStatusType.PASS_WRONG_LENGTH:
        passwordForm.querySelector('#bad-primaryPassword').style.display = 'block';
        passwordForm.querySelector('#bad-primaryPassword').innerHTML = 'Password must be 7-30 characters long'
          + 'is unsafe!';
        break;
      case InvalidStatusType.EMPTY:
        passwordForm.querySelector('#bad-primaryPassword').style.display = 'block';
        passwordForm.querySelector('#bad-primaryPassword').innerHTML = 'You forgot to enter password';
        break;
      case InvalidStatusType.VALID:
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
    return InvalidStatusType.EMPTY;
  }
  if (passwordConfirm === primaryPassword) {
    return InvalidStatusType.VALID;
  }
  return InvalidStatusType.DO_NOT_MATCH;
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
      case InvalidStatusType.DO_NOT_MATCH:
        confirmPasswordForm.querySelector('#bad-confirmPassword').style.display = 'block';
        confirmPasswordForm.querySelector('#bad-confirmPassword').innerHTML = 'Passwords '
          + 'don\'t match';
        break;
      case InvalidStatusType.EMPTY:
        confirmPasswordForm.querySelector('#bad-confirmPassword').style.display = 'block';
        confirmPasswordForm.querySelector('#bad-confirmPassword').innerHTML = 'You forgot to '
          + 'confirm your password';
        break;
      case InvalidStatusType.VALID:
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

/**
 * Add event listeners to all inputs in form.
 * Event listeners check if user entered wrong data and display errors
 */
export const addValidationForSignupForms = () => {
  addValidationEmail();
  addValidationNickname();
  addValidationPrimaryPassword();
  addValidationConfirmPassword();
};

const validatePassword = (password) => {
  if (password === '') {
    return InvalidStatusType.EMPTY;
  }
  return InvalidStatusType.VALID;
};

/**
 * Add event listeners to all inputs in form.
 * Event listeners check if user entered wrong data and display errors
 */
export const addValidationForLoginForms = () => {
  addValidationEmail();

  const passwordInput = document.getElementById('password-input');
  const passwordForm = document.querySelector('form');

  passwordForm.querySelector('#bad-password').style.display = 'none';
  passwordInput.addEventListener('focusout', (e) => {
    switch (validatePassword(e.target.value)) {
      case InvalidStatusType.EMPTY:
        passwordForm.querySelector('#bad-password').style.display = 'block';
        passwordForm.querySelector('#bad-password').innerHTML = 'You forgot to enter password';
        break;
      case InvalidStatusType.VALID:
        passwordForm.querySelector('#bad-password').style.display = 'none';
        break;
      default:
        passwordForm.querySelector('#bad-password').style.display = 'none';
    }
  });

  passwordInput.addEventListener('input', () => {
    passwordForm.querySelector('#bad-password').style.display = 'none';
  });
};

/**
 * Checks if user somewhere entered wrong data.
 * Used to prevent sending request with wrong data
 * */
export const haveWrongInput = (form) => {
  let haveEmptyInput = false;
  const errorFields = form.querySelectorAll('.bad-input');

  for (const error of errorFields) {
    if (error.style.display !== 'none') {
      return true;
    }
  }

  const primaryPassword = document.querySelector('#primaryPassword-input');
  if (primaryPassword != null) {
    const confirmPassword = document.querySelector('#confirmPassword-input');
    if (primaryPassword.value !== confirmPassword.value) {
      const err = confirmPassword.nextElementSibling;
      err.style.display = 'block';
      err.innerHTML = 'Passwords don\'t match';
      return true;
    }
  }
  const inputFields = form.querySelectorAll('.inputField');

  for (const input of inputFields) {
    if (input.value === '') {
      haveEmptyInput = true;
      break;
    }
  }

  if (!haveEmptyInput) {
    return false;
  }

  for (const input of inputFields) {
    if (input.value === '') {
      const err = input.nextElementSibling;
      err.style.display = 'block';
      err.innerHTML = 'You forgot to fill the field!';
    }
  }

  return true;
};

/** Shows errors in case of bad response from server */
export const badResponseHandler = () => {
  let errorField = document.getElementById('bad-password');
  if (errorField !== null) {
    errorField.style.display = 'block';
    errorField.innerHTML = 'Email with such password don\'t exist';
    return;
  }

  errorField = document.getElementById('bad-email');
  if (errorField !== null) {
    errorField.style.display = 'block';
    errorField.innerHTML = 'This email is already in use<br> You can log in or create new account';
  }
};
