/* eslint-disable */
import { BaseView } from './BaseView.js';
import { events } from '../../consts/events.js';
import {renderAuthPage} from '../../components/Auth/Auth.js';
import {badResponseHandler, checkAuth, haveWrongInput} from '../../js/utils.js';
import {CreateLeftSide} from "../../components/LeftSideBar/LeftSideBar.js";
import {CreateNoteContent} from "../../components/NoteContent/NoteContent.js";

export class NotesView extends BaseView {
  constructor(eventBus, { data = {} } = {}) {
    super(eventBus, data);

  }

  render = async (data) => {
    if (await checkAuth() === 401) {
      this.eventBus.emit(events.pathChanged, {URL: 'signup'});
      return;
    }
    if (data.data === '') {
      this.eventBus.emit(events.notesPage.requestNotes);
      return;
    }

    const root = document.getElementById('root');
    root.innerHTML = '';

    const page = document.createElement('div');
    page.classList.add('notion__whole__page');

    CreateLeftSide(page, {name: 'Henry', notes: data.notes});

    CreateNoteContent(page, {note: data.note});

    root.appendChild(page);

    this.logoutHandler();
  };

  logoutHandler = () => {
    const logout = document.getElementById('logout');
    console.log('logout btn ', logout);
    if (logout) {
      logout.dataset.section = 'logout';
      logout.addEventListener('click', (e) => {
        e.preventDefault();
        this.eventBus.emit(events.notesPage.logout);
      })
    }
  }
}
