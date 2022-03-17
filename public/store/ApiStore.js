const baseUrl = '95.163.212.32';

/**
 * Class represents storage for API requests
 * 
 */
export class ApiStore {
  baseUrl;
  /**
   * Creates a ApiStore
   * @param {string} baseUrl - The base of the url where API requests are sent to
   */
  constructor(baseUrl = '95.163.212.32') {
    this.baseUrl = baseUrl;
  }

  /**
   * Forming, sending and revieving response for fetch request for API
   * @param {string} url for
   * @param {any} data
   * @returns {promise<Object>} - the body of HTTP response from called API
   */
  static postData = async (url = "", data = {}) => {
    const response = await fetch(url, {
      method: "POST",
      mode: "cors",
      credentials: 'include',
      headers: {
        "Content-Type": "multipart/form-data",
      },
      body: JSON.stringify(data),
    });
    return response;
  };

  /**
   * Does signup request to API
   * @param {object} param0 - The parameters, requested by API
   * @returns {promise<Object>} - the promise with result of calling Signup method
   */
  static Signup = async ({ username, email, password, confirm_password }) => {
    const data = await this.postData(`http://${baseUrl}:3001/api/v1/users/signup`, {
      username,
      email,
      password,
      confirm_password,
    });
    return data;
  };
  /**
   * Does login request to API
   * @param {object} param0 - The parameters, requested by API
   * @returns {promise<Object>} - the promise with result of calling Login method
   */
  static Login = async ({ email, password }) => {
    const data = await this.postData(`http://${baseUrl}:3001/api/v1/users/login`, {
      email,
      password,
    });

    console.log("returned from fetch", data);
    return data;
  };

  /**
   * Does logout request to API
   * @returns {promise<Object>} - the promise with result of calling Logout method
   */
  static Logout = async () => {
    const res = await fetch(`http://${baseUrl}:3001/api/v1/users/logout`, {
      method: "GET",
      credentials: 'include',
    });

    return res;
  };

  /**
   * Does GetNoteByToken request to API
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
   * Does GetAllNotes request to API
   * @returns {promise<Notes>} - the promise with result of calling GetAllNotes method
   */
  static GetAllNotes = async () => {

    const baseUrl = '95.163.212.32';

    const res = await fetch(`http://${baseUrl}:3001/api/v1/notes`, {
      method: "GET",
      // mode: "no-cors",
      credentials: 'include',

    });

    if (res.status !== 200) {
      return 401;
    }

    const resp = await res.json();

    return resp;
  };
}
