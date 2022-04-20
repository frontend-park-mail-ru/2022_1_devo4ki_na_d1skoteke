/* eslint-disable camelcase,class-methods-use-this */
import { eventBus } from '../../modules/eventBus.js';
import { ApiStore } from '../../store/ApiStore.js';
import { events } from '../../consts/events.js';

export class NotesModel {
  async getAllNotes() {
    const fetchNotesRes = await ApiStore.GetAllNotes();
    const { notes } = fetchNotesRes;
    const note = notes[0] !== undefined ? notes[0] : { name: '', body: '' };
    eventBus.emit(events.notesPage.notesReady, { notes, note });
  }
}
