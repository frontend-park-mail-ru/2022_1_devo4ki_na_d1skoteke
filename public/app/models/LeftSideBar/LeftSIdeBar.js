// import { ApiStore } from "../../../public/store/ApiStore";

import { ApiStore } from '../../../store/ApiStore.js';

class LeftSideBarModel {
  #books;

  constructor() {
    const initialNotes = { notes: [] };
    const { notes } = initialNotes;
    this.#books = notes.notes;
  }

  async getUpdates() {
    const fetchRes = await ApiStore.GetAllNotes();
    this.#books = fetchRes.notes;
    return this.#books;
  }
}

export { LeftSideBarModel };
