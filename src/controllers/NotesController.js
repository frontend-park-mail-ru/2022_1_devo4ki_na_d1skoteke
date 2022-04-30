import { events } from '../consts/events.js';
import { NotesModel } from '../models/NotesModel.js';
import { NotesView } from '../views/NotesView.js';
import { BaseController } from './BaseController.js';

export class NotesController extends BaseController {
  constructor() {
    super(NotesView, NotesModel);
    this.events.push(
      {
        event: events.notesPage.requestNotes,
        handler: this.model.getDataForNotes,
      },
      {
        event: events.notesPage.notesReady,
        handler: this.view.render,
      },
      {
        event: events.notesPage.logout,
        handler: this.model.logoutHandler,
      },
      {
        event: events.notesPage.submitUserChange,
        handler: this.model.userChangeHandler,
      },
      {
        event: events.notesPage.reRenderNewData,
        handler: this.view.renderSettings,
      },
      {
        event: events.notesPage.noteSwitch,
        handler: this.view.renderNoteContent,
      },
      {
        event: events.notesPage.noteSave,
        handler: this.model.noteSaveSubmit,
      },
      {
        event: events.notesPage.notesUpdate,
        handler: this.view.renderNotesChange,
      },
    );
    this.subscribe();
  }
}
