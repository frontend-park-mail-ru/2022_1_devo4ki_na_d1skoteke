// import { ApiStore } from "../../../public/store/ApiStore";

import { ApiStore } from "../../../store/ApiStore.js";

class LeftSideBarModel {
    #books;

    constructor() {
        const initialNotes = {"notes":[]}
        const notes = initialNotes["notes"];
        this.#books = notes.notes;
    }

    async getUpdates() {
        const fetchRes = await ApiStore.GetAllNotes();
        this.#books = fetchRes.notes;
        return this.#books;
    }

    async getNotes() {
        return new Promise((resolve, reject) => {
            resolve(this.#books);
        });
    }
}

export { LeftSideBarModel };