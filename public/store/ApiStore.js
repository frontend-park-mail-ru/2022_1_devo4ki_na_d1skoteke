/**
 * Class represents storage for API requests
 */
export class ApiStore {
  baseUrl;
  /**
   * Creates a ApiStore
   * @param {string} baseUrl - The base of the url where API requests are sent to
   */
  constructor(baseUrl) {
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
      mode: "no-cors",
      credentials: 'include',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    // return response.json();
  };

  /**
   * Does signup request to API
   * @param {object} param0 - The parameters, requested by API
   * @returns {promise<Object>} - the promise with result of calling Signup method
   */
  static Signup = async ({ username, email, password, confirmPassword }) => {
    const data = await this.postData("/api/v1/users/signup", {
      username,
      email,
      password,
      confirmPassword,
    });
    return data;
  };
  /**
   * Does login request to API
   * @param {object} param0 - The parameters, requested by API
   * @returns {promise<Object>} - the promise with result of calling Login method
   */
  static Login = async ({ email, password }) => {
    const data = await this.postData("http://95.163.212.32:3001/api/v1/users/login", {
      email,
      password,
    });
    return data;
  };

  /**
   * Does logout request to API
   * @returns {promise<Object>} - the promise with result of calling Logout method
   */
  static Logout = async () => {
    const res = await fetch("http://95.163.212.32:3001/api/v1/users/logout", {
      method: "GET",
      mode: "no-cors",
      credentials: 'include',
    });
    const resp = await res.json();
    return resp;
  };

  /**
   * Does GetNoteByToken request to API
   * @param {string} id - The ID of note, requested by API
   * @returns {promise<Note>} - the promise with result of calling GetNoteByToken method
   */
  static GetNoteByToken = async (id) => {
    const res = await fetch(`/api/v1/note/${id}`);
    const resp = await res.json();
    return resp;
  };

  /**
   * Does GetAllNotes request to API
   * @returns {promise<Notes>} - the promise with result of calling GetAllNotes method
   */
  static GetAllNotes = async () => {


    const res = await fetch("http://95.163.212.32:3001/api/v1/notes", {
      method: "GET",
      mode: "no-cors",
      credentials: 'include',


    });
    // console.log
    const resp = await res.json();
    console.log(resp);
    return resp;
  };
}

export default ApiStore;
