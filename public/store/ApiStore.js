export class ApiStore {
  baseUrl;

  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  static postData = async (url = "", data = {}) => {
    const response = await fetch(url, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(data),
    });
    return response.json();
  };

  static Signup = async ({ username, email, password, confirmPassword }) => {
    const data = await this.postData("/api/v1/users/signup", {
      username,
      email,
      password,
      confirmPassword,
    });
    return data;
  };

  static Login = async ({ email, password }) => {
    const data = await this.postData("/api/v1/users/login", {
      email,
      password,
    });
    return data;
  };

  static Logout = async () => {
    const res = await fetch("/api/v1/users/logout");
    const resp = await res.json();
    return resp;
  };

  static GetNoteByToken = async (id) => {
    const res = await fetch(`/api/v1/note/${id}`);
    const resp = await res.json();
    return resp;
  };

  static GetAllNotes = async () => {
    const res = await fetch("/api/v1/notes");
    const resp = await res.json();
    return resp;
  };
}

export default ApiStore;
