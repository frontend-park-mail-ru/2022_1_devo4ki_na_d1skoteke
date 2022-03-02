export const InvalidStatusType = {
  WRONG_SYMBOLS: 'invalid',
  ALREADY_EXISTS: 'already exists',
  DO_NOT_MATCH: 'don\'t match',
  EMPTY: 'empty',
  WRONG_PASS: 'wrong password',
  VALID: 'valid',
};

export const validateEmail = (email) => {
  if (email === '') {
    return InvalidStatusType.EMPTY;
  }

  const emailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  if (!emailRegex.test(email)) {
    return InvalidStatusType.WRONG_SYMBOLS;
  }
  // будет в будущем
  // if (emailDatabaseCheck(email)){
  //   return invalidStatusType.ALREADY_EXISTS
  // }
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

export const createBadEmailDiv = () => {
  const badEmailDiv = document.createElement('div');
  badEmailDiv.innerHTML = 'please provide valid email';
  badEmailDiv.classList.add('bad-input-div');
  badEmailDiv.id = 'bad-email-div';
  badEmailDiv.style.display = 'none';

  return badEmailDiv;
};

export const createEmailInput = () => {
  const emailDiv = document.createElement('div');
  emailDiv.classList.add('form-div');

  const emailInput = createInput('email', 'enter email', 'email');
  emailInput.id = 'email-input';

  emailDiv.appendChild(createLabel('Email'));
  emailDiv.appendChild(emailInput);
  emailDiv.appendChild(createBadEmailDiv());

  emailInput.addEventListener('input', (e) => {
    switch (validateEmail(e.target.value)) {
      case InvalidStatusType.WRONG_SYMBOLS:
        emailDiv.querySelector('#bad-email-div').style.display = 'block';
        emailDiv.querySelector('#bad-email-div')
          .innerHTML = 'please provide valid email address';
        break;
      // case InvalidStatusType.ALREADY_EXISTS:
      //   if (emailDiv.parentElement.className?? === 'loginForm'){
      //     break;
      //   }
      //   if (emailDiv.parentElement.className?? === 'signUpForm') {
      //     emailDiv.querySelector('#bad-email-div').style.display = 'block';
      //     emailDiv.querySelector('#bad-email-div')
      //       .innerHTML = 'your email is already in use, please try to login';
      //   }
      //   break;
      case InvalidStatusType.EMPTY:
        emailDiv.querySelector('#bad-email-div').style.display = 'none';
        break;
      case InvalidStatusType.VALID:
        emailDiv.querySelector('#bad-email-div').style.display = 'none';
        break;
      default:
    }
  });

  return emailDiv;
};
