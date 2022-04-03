import { ApiStore } from "../../../store/ApiStore.js";

class NoteModel {
    #book;

    constructor() {
        this.#book = {name: "fwef", body: "fwefwef"};
    }

    async getNote() {
        const fetchRes = await ApiStore.GetAllNotes();
        this.#book = fetchRes.notes[0] !== undefined ? fetchRes.notes[0] : { name: '', body: '' };

        return this.#book;
    }

}

export { NoteModel };