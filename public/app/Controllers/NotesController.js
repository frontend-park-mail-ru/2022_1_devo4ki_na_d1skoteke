import { events } from '../../consts/events.js';
import { NotesModel } from '../models/NotesModel.js';
import { NotesView } from '../views/NotesView.js';
import { BaseController } from './BaseController.js';

export class NotesController extends BaseController {
  constructor() {
    super(NotesView, NotesModel);
    this.events.push(
      {
        event: events.notesPage.requestNotes,
        handler: this.model.getAllNotes,
      },
      {
        event: events.notesPage.notesReady,
        handler: this.view.render,
      },
    );
    this.subscribe();
  }
}
