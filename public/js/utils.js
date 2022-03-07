export const InvalidStatusType = {
  WRONG_SYMBOLS: 'invalid',
  ALREADY_EXISTS: 'already exists',
  DO_NOT_MATCH: 'don\'t match',
  EMPTY: 'empty',
  WRONG_PASS: 'wrong password',
  VALID: 'valid',
};

export const SetFavicon = () => {
  const addFavicon = document.createElement('link');
  addFavicon.setAttribute('rel', 'icon');
  addFavicon.setAttribute('href', './img/favicon.ico');

  document.querySelector('head').insertBefore(addFavicon, document.querySelector('title').nextSibling);
};

export const validateEmail = (email) => {
  if (email === '') {
    return InvalidStatusType.EMPTY;
  }

  const emailRegex = /^([a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?)$/;
  if (!emailRegex.test(email)) {
    return InvalidStatusType.WRONG_SYMBOLS;
  }
  // TODO: check email in db and return ALREADY_EXISTS status

  return InvalidStatusType.VALID;
};

export const addValidationEmail = () => {
  const emailInput = document.getElementById('email-input');
  const emailForm = document.querySelector('form');

  emailInput.addEventListener('focusout', (e) => {
    switch (validateEmail(e.target.value)) {
      case InvalidStatusType.WRONG_SYMBOLS:
        emailForm.querySelector('#bad-email').style.display = 'block';
        emailForm.querySelector('#bad-email')
          .innerHTML = 'Please enter valid email';
        break;
      // TODO: ALREADY_EXISTS status handler
      case InvalidStatusType.EMPTY:
        emailForm.querySelector('#bad-email').style.display = 'none';
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

export const haveWrongInput = (form) => {
  const errorFields = form.querySelectorAll('.bad-input');

  // eslint-disable-next-line no-restricted-syntax
  for (const error of errorFields) {
    if (error.style.display !== 'none') {
      return true;
    }
  }
  return false;
};
