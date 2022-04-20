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
    requestNotes: 'notesPage:requestNotes',
    notesReady: 'notesPage:notesReady',
    authCheckRequest: 'notesPage:authCheckRequest',
    logout: 'notesPage:logout',
  },
};
