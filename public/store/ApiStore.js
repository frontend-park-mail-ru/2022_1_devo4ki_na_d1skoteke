/* eslint-disable camelcase */
// eslint-disable-next-line no-unused-vars
const localUrl = '127.0.0.1';

const deployUrl = '95.163.212.32';

const baseUrl = localUrl;

/**
 * Class represents storage for API requests
 */
export class ApiStore {
  /**
   * Forming, sending and revieving response for fetch request for API
   * @param {string} url for
   * @param {any} data
   * @returns {promise<Object>} - the body of HTTP response from called API
   */
  static postData = async (url = '', data = {}) => {
    const response = await fetch(url, {
      method: 'POST',
      mode: 'cors',
      credentials: 'include',
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      body: JSON.stringify(data),
    });
    return response;
  };

  static putData = async (url = '', data = {}) => fetch(url, {
    method: 'PUT',
    mode: 'cors',
    credentials: 'include',
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    body: JSON.stringify(data),
  });

  /**
   * Sends signup request to API
   * @param {object} param0 - The parameters, requested by API
   * @returns {promise<Object>} - the promise with result of calling Signup method
   */
  static Signup = async ({
    username, email, password, confirm_password,
  }) => {
    const data = await this.postData(`http://${baseUrl}:3001/api/v1/users/signup`, {
      username,
      email,
      password,
      confirm_password,
    });
    return data;
  };

  /**
   * Sends login request to API
   * @param {object} param0 - The parameters, requested by API
   * @returns {promise<Object>} - the promise with result of calling Login method
   */
  static Login = async ({ email, password }) => {
    const data = await this.postData(`http://${baseUrl}:3001/api/v1/users/login`, {
      email,
      password,
    });
    return data;
  };

  /**
   * Sends logout request to API
   * @returns {promise<Object>} - the promise with result of calling Logout method
   */
  static Logout = async () => {
    const res = await fetch(`http://${baseUrl}:3001/api/v1/users/logout`, {
      method: 'GET',
      credentials: 'include',
    });

    return res;
  };

  /**
   * Sends GetNoteByToken request to API
   * @param {string} id - The ID of note, requested by API
   * @returns {promise<Note>} - the promise with result of calling GetNoteByToken method
   */
  static GetNoteByToken = async (id) => {
    const res = await fetch(`http://${baseUrl}:3001/api/v1/note/${encodeURI(id)}`);
    const resp = await res.json();

    if (resp.status !== 200) {
      return -1;
    }

    return resp.body;
  };

  /**
   * Sends GetAllNotes request to API
   * @returns {promise<Notes>} - the promise with result of calling GetAllNotes method
   */
  static GetAllNotes = async () => {
    const res = await fetch(`http://${baseUrl}:3001/api/v1/notes`, {
      method: 'GET',
      credentials: 'include',

    });

    if (res.status !== 200) {
      return 401;
    }

    const resp = await res.json();

    return resp;
  };

  /**
   * Allows to check whether user is authenticated or not
   * @returns HTTP code status, representing the auth status
   */
  static CheckAuth = async () => {
    const res = await fetch(`http://${baseUrl}:3001/api/v1/users/auth`, {
      method: 'GET',
      credentials: 'include',

    });

    if (res.status !== 200) {
      return 401;
    }

    return 200;
  };

  static ProfileChange = async ({
    avatar, email, username, password,
  }) => this.putData(`http://${baseUrl}:3001/api/v1/user`, {
    avatar,
    username,
    email,
    password,
  });
}
