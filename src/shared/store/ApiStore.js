export default class ApiStore {
  baseUrl;
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  async Signup(signupData) {
    let endpoint = `${this.baseUrl}/api/v1/users/signup`;

    const reqInit = {
      method: "POST",
      headers: { ...signupData.headers },
    };
    const response = await fetch(endpoint, {
      body: JSON.stringify(signupData.body),
    });
    // TODO: handle response - set cookie, etc
  }

  async Login() {
    let endpoint = `${this.baseUrl}/api/v1/users/login`;

    const reqInit = {
      method: "POST",
      headers: { ...signupData.headers },
    };
    const response = await fetch(endpoint, {
      body: JSON.stringify(signupData.body),
    });
    // TODO: handle response - set cookie, etc
  }
  async Logout() {}

  async GetNoteByToken() {}

  async GetAllNotes() {}
}
