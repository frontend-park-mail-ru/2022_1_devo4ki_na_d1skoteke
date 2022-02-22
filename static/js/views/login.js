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

const getLogInTitle = () => {
    const logInTitle = document.createElement('div');
    logInTitle.classList.add('login-title');
    logInTitle.innerHTML = "Log in";

    return logInTitle;
}

const createBadEmailDiv = () => {
    const badEmailDiv = document.createElement('div');
    badEmailDiv.innerHTML = 'Please provide valid email';
    badEmailDiv.id = 'bad-email-div';
    badEmailDiv.style.display = 'none';

    return badEmailDiv;
}

const createEmailInput = () => {
    const emailDiv = document.createElement('div');
    emailDiv.classList.add('form-div');

    const emailInput = createInput('email', 'Email', 'email');
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

    const passwordInput = createInput('password', 'Password', 'password');

    passwordDiv.appendChild(passwordInput);
    return passwordDiv;
}

const createSubmitButton = () => {
    const buttonDiv = document.createElement('div');
    buttonDiv.classList.add('form-div');

    const submitBtn = document.createElement('input');
    submitBtn.type = 'submit';
    submitBtn.value = 'Login';

    buttonDiv.appendChild(submitBtn);
    return buttonDiv;
}

export const getLoginForm = () => {
    const loginForm = document.createElement('form');
    loginForm.classList.add('login-form');

    loginForm.setAttribute('method',"post");
    loginForm.setAttribute('action', ")");

    loginForm.appendChild(createEmailInput());
    loginForm.appendChild(createPasswordInput());
    loginForm.appendChild(createSubmitButton());

    return loginForm;
}

export const Login = () => {
    const root = document.getElementById('root');
    root.innerHTML = '';

    const loginDiv = document.createElement('div');

    loginDiv.classList.add('login-div');
    loginDiv.appendChild(getLogInTitle());
    loginDiv.appendChild(getLoginForm());

    root.appendChild(loginDiv);
}
