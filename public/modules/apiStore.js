/* eslint-disable camelcase */
import { baseUrl, urls } from '../consts/urls.js';

let contentType = 'multipart/form-data';
if (baseUrl === 'localhost:3000') {
  contentType = 'application/json';
}

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
        'Content-Type': contentType,
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
      'Content-Type': contentType,
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
    const data = await this.postData(`http://${urls.api.register}`, {
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
    const data = await this.postData(`http://${urls.api.login}`, {
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
    const res = await fetch(`http://${urls.api.logout}`, {
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
    const res = await fetch(`http://${urls.api.getSingleNote}/${encodeURI(id)}`);
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
    const res = await fetch(`http://${urls.api.getNotes}`, {
      method: 'GET',
      credentials: 'include',
    });

    if (res.status !== 200) {
      return 401;
    }

    return res.json();
  };

  /**
   * Allows to check whether user is authenticated or not
   * @returns HTTP code status, representing the auth status
   */
  static CheckAuth = async () => {
    const res = await fetch(`http://${urls.api.checkAuth}`, {
      method: 'GET',
      credentials: 'include',
    });

    if (res.status !== 200) {
      return 401;
    }

    return 200;
  };

  static GetUser = async () => {
    const res = await fetch(`http://${baseUrl}/api/v1/user`, {
      method: 'GET',
      credentials: 'include',
    });

    if (res.status !== 200) {
      return 401;
    }
    const resp = res.json();

    return resp;
  };

  static ProfileChange = async ({
    avatar, email, username, password,
  }) => this.putData(`http://${baseUrl}/api/v1/user`, {
    avatar,
    username,
    email,
    password,
  });
}