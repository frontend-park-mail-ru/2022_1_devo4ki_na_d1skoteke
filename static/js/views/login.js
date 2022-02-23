'use strict';

const validateEmail = (email) => {
    let emailPattern = new RegExp(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/);
    return emailPattern.test(email);
}

const createInput = (type, text, name) => {
	const input = document.createElement('input');
	input.type = type;
	input.name = name;
	input.placeholder = text;

	return input;
}

const createLabel = (text) => {
    const label = document.createElement('label');
    label.classList.add('my-label');
    label.innerHTML = text;
    return label;
}

const getLogInTitle = () => {
    const logInTitle = document.createElement('div');
    logInTitle.classList.add('login-title');
    logInTitle.innerHTML = "Log in";

    return logInTitle;
}

const createBadEmailDiv = () => {
    const badEmailDiv = document.createElement('div');
    badEmailDiv.innerHTML = 'please provide valid email';
    badEmailDiv.id = 'bad-email-div';
    badEmailDiv.style.display = 'none';

    return badEmailDiv;
}

const createEmailInput = () => {
    const emailDiv = document.createElement('div');
    emailDiv.classList.add('form-div');

    const emailInput = createInput('email', 'enter email', 'email');
    emailInput.id = 'email-input';

    emailDiv.appendChild(createLabel('Email'));
    emailDiv.appendChild(emailInput);
    emailDiv.appendChild(createBadEmailDiv());

    emailInput.addEventListener('input', (e) => {
        if (validateEmail(e.target.value)) {
            emailDiv.querySelector("#bad-email-div").style.display = 'none';
        } else if (e.target.value) {
            emailDiv.querySelector("#bad-email-div").style.display = 'block';
        }
    });

    return emailDiv;
}

const createPasswordInput = () => {
    const passwordDiv = document.createElement('div');
    passwordDiv.classList.add('form-div');

    const passwordInput = createInput('password', 'enter password', 'password');
    passwordInput.id = 'password-input';

    passwordDiv.appendChild(createLabel('Password'));
    passwordDiv.appendChild(passwordInput);
    return passwordDiv;
}

const createForgotPassword = () => {
    const forgotPassword = document.createElement('a');
    forgotPassword.classList.add('forgot-password');
    forgotPassword.id = 'forgot-password';
    forgotPassword.href = '#';
    forgotPassword.innerHTML = 'Forgot password?';
    return forgotPassword;
}

const createSubmitButton = () => {
    const submitBtn = document.createElement('div');
    submitBtn.tabIndex = 0;
    submitBtn.id = 'login-submit-button';
    submitBtn.type = 'submit';
    submitBtn.innerHTML = 'Login';

    return submitBtn;
}

export const getLoginForm = () => {
    const loginForm = document.createElement('form');
    loginForm.classList.add('login-form');

    loginForm.setAttribute('method',"post");
    loginForm.setAttribute('action', ")");

    loginForm.appendChild(createEmailInput());
    loginForm.appendChild(createPasswordInput());
    loginForm.appendChild(createSubmitButton());
    loginForm.appendChild(createForgotPassword());

    return loginForm;
}

export const Login = () => {
    const root = document.getElementById('root');
    root.innerHTML = '';

    const loginDiv = document.createElement('div');

    loginDiv.classList.add('login-div');
    loginDiv.appendChild(getLogInTitle());
    loginDiv.appendChild(getLoginForm());

    const terms = createLabel('By clicking “Login” above, you acknowledge that you have read and understood, and agree to Notion\'s terms & conditions and Privacy Policy .');
    terms.style.textAlign = 'center';
    terms.style.marginLeft = 'auto';
    loginDiv.appendChild(terms);

    root.appendChild(loginDiv);
}
