import { Login } from './login.js';
import { Signup } from './signup.js';

export const renderEnter = (context) => {
  if (context.ENTER_TYPE === 'login') {
    Login(context);
  } else if (context.ENTER_TYPE === 'signup') {
    Signup(context);
  }
};
