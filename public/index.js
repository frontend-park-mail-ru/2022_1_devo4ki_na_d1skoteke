import {Login} from './js/views/login.js';
import {Signup} from './js/views/signup.js';
import {SetFavicon} from './js/views/utils.js';
// import {renderAuth} from './components/Enter/Enter.js';

const root = document.getElementById('root');

// const configApp = {
//   login: {
//     href: '/login',
//     name: 'Авторизация',
//     open: loginPage,
//   },
// };
//
// function loginPage() {
//   root.appendChild(renderAuth({
//     inputs: [
//       {type: 'email', name: 'email', placeholder: 'Email'},
//       {type: 'password', name: 'password', placeholder: 'Пароль'},
//     ],
//     url: {
//       signup: '/signup',
//       login: '/login',
//     },
//     auth: true,
//   }));
// }
// const enterPage = () => {
//   const enter = new EnterComponent(root);
//   enter.render();
// };

SetFavicon();
Login();
Signup();

// enterPage();
