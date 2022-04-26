// eslint-disable-next-line no-unused-vars
const localUrl = 'localhost:3000';

// eslint-disable-next-line no-unused-vars
const deployUrl = '95.163.212.32:3001';

export const baseUrl = localUrl;

export const ApiVersion = '/api/v1';

export const urls = {
  api: {
    checkAuth: `${baseUrl}${ApiVersion}/users/auth`,
    getNotes: `${baseUrl}${ApiVersion}/notes`,
    getSingleNote: `${baseUrl}${ApiVersion}/note`,
    logout: `${baseUrl}${ApiVersion}/users/logout`,
    login: `${baseUrl}${ApiVersion}/users/login`,
    register: `${baseUrl}${ApiVersion}/users/signup`,
  },
};
