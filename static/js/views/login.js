'use strict';

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

export const getLoginForm = () => {
    const loginForm = document.createElement('form');
    loginForm.classList.add('login-form');

    loginForm.setAttribute('method',"post");
    loginForm.setAttribute('action', "submit.php");

    const emailInput = createInput('email', 'Email', 'email');
	const passwordInput = createInput('password', 'Password', 'password');

    const submitBtn = document.createElement('input');
	submitBtn.type = 'submit';
	submitBtn.value = 'Login';

    loginForm.appendChild(emailInput);
    loginForm.appendChild(passwordInput);
    loginForm.appendChild(submitBtn);

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
