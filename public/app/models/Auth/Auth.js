class AuthModel {
    #login;
    #signup;

    constructor() {
        this.#login = {
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
          }

          this.#signup = {
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
          }
    }

    getLoginModel() {
        return this.#login;
    }
    
    getSignupModel() {
        return this.#signup;    
    }

    getModel(view_tag) {
        if (view_tag === 'signup') {
            return this.getSignupModel();
        }
        return this.getLoginModel();
    }
}

export { AuthModel };