// eslint-disable-next-line import/no-unresolved
import { Auth } from './compiled/Auth.js';
import { addValidationForLoginForms, addValidationForSignupForms } from '../../js/utils.js';

/**
 * Renders Login or Signup page from template
 * @param {Object} context - context which define what page and what inputs to draw
 */
export const renderAuthPage = (node, context) => {
  // const root = document.getElementById('root');
  node.innerHTML = '';

  const completeLoginForm = document.createElement('div');

  completeLoginForm.innerHTML = Auth(context);
  node.appendChild(completeLoginForm);

  if (context.ENTER_TYPE === 'login') {
    addValidationForLoginForms();
    return;
  }
  addValidationForSignupForms();
};
