export const signupFormStructure = {
  ENTER_TYPE: 'signup',
  inputForms: [
    {
      labelname: 'Email',
      name: 'email',
      placeholder: 'Enter email',
    },
    {
      labelname: 'Nickname',
      name: 'nickname',
      placeholder: 'Enter your nickname',
    },
    {
      type: 'password',
      labelname: 'Password',
      name: 'primaryPassword',
      placeholder: 'Enter password',
    },
    {
      type: 'password',
      labelname: 'Confirm password',
      name: 'confirmPassword',
      placeholder: 'Enter password again',
    },
  ],
};

export const loginFormStructure = {
  ENTER_TYPE: 'login',
  inputForms: [
    {
      labelname: 'Email',
      name: 'email',
      placeholder: 'Enter email',
    },
    {
      type: 'password',
      labelname: 'Password',
      name: 'password',
      placeholder: 'Enter password',
    },
  ],
};
