export const events = {
  pathChanged: 'pathChanged',
  redirectBack: 'redirectBack',
  redirectForward: 'redirectForward',

  router: {
    go: 'router:go',
  },

  authPage: {
    unauthorised: 'auth:unauthorised',
    authorised: 'auth:authorised',
    submitSignup: 'auth:submitSignup',
    submitLogin: 'auth:submitLogin',
    badResponse: 'auth:badResponse',
  },
  notesPage: {
    notesReady: 'notesPage:notesReady',
  },
};
