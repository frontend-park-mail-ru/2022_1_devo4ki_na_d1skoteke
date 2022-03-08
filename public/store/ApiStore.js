export class ApiStore {
  baseUrl;

  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  async postData(url = '', data = {}) {
    const response = await fetch(url, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: JSON.stringify(data),
    });
    return response.json();
  }

  async Signup({
    username, email, password, confirm_password,
  }) {
    const data = await postData('/api/v1/users/signup', {
      username, email, password, confirm_password,
    });
    return data;
  }

  async Login({ email, password }) {
    const data = await postData('/api/v1/users/login', { email, password });
    return data;
  }

  async Logout() {
    const res = await fetch('/api/v1/users/logout');
    const resp = await res.json();
    console.log(resp);
    return (resp);
  }

  async GetNoteByToken(id) {
    const res = await fetch(`/api/v1/note/${id}`);
    const resp = await res.json();
    console.log(resp);
    return (resp);
  }

  async GetAllNotes() {
    const res = await fetch('/api/v1/notes');
    const resp = await res.json();
    console.log(resp);
    return (resp);
  }
}

export default ApiStore;
