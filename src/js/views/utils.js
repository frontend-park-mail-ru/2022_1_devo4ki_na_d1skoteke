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
  addFavicon.setAttribute('rel', 'favicon');
  addFavicon.setAttribute('href', './src/img/favicon.ico');

  document.querySelector('head').appendChild(addFavicon);
};

export const createLogo = () => {
  const logo = document.createElement('img');
  logo.classList.add('logo');
  logo.src = './src/img/signup_login_logo.png';
  return logo;
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

export const createInput = (type, text, name) => {
  const input = document.createElement('input');
  input.type = type;
  input.name = name;
  input.placeholder = text;

  return input;
};

export const createLabel = (text) => {
  const label = document.createElement('label');
  label.classList.add('my-label');
  label.innerHTML = text;
  return label;
};

export const createBadEmailTextError = () => {
  const badEmailText = document.createElement('div');
  badEmailText.innerHTML = 'Please enter valid email';
  badEmailText.classList.add('bad-input');
  badEmailText.id = 'bad-email';
  badEmailText.style.display = 'none';

  return badEmailText;
};

export const createEmailInput = () => {
  const emailForm = document.createElement('div');
  emailForm.classList.add('form');

  const emailInput = createInput('email', 'Enter email', 'email');
  emailInput.id = 'email-input';

  emailForm.appendChild(createLabel('Email'));
  emailForm.appendChild(emailInput);
  emailForm.appendChild(createBadEmailTextError());

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

  return emailForm;
};
