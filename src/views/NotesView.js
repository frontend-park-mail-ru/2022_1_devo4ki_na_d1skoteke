/* eslint-disable */
import { BaseView } from './BaseView.js';
import { events } from '../consts/events.js';
import {renderAuthPage} from '../components/Auth/Auth.js';
import {badResponseHandler, checkAuth, haveWrongInput} from '../js/utils.js';
import {createLeftSide} from "../components/LeftSideBar/LeftSideBar.js";
import {createNoteContent} from "../components/NoteContent/NoteContent.js";
import {renderSettings} from "../components/Settings/Settings.js";
import {eventBus} from "../modules/eventBus";

export class NotesView extends BaseView {
  constructor(eventBus, {data = {}} = {}) {
    super(eventBus, data);
  }

  render = async (context) => {
    if (await checkAuth() === 401) {
      this.eventBus.emit(events.pathChanged, {URL: '/signup'});
      return;
    }
    if (context.data === '') {
      this.eventBus.emit(events.notesPage.requestNotes);
      return;
    }

    const root = document.getElementById('root');
    root.innerHTML = '';

    const page = document.createElement('div');
    page.classList.add('notion__whole__page');
    root.appendChild(page);

    // createLeftSide(page,{name: context.userData.username, notes: context.notes});
    this.renderLeftSide({name: context.user.userData.username, notes: context.notes});
    this.renderNoteContent({ note: context.note })

    this.renderSettings(context.user);
    this.submitUserChangeHandler();
  };

  renderSettings = (context) => {
    renderSettings(context);
  };

  renderNoteContent = (data) => {
    createNoteContent(data.note);
    this.noteSaveHandler(data.note);
  };

  renderLeftSide = (data) => {
    createLeftSide({name: data.name, notes: data.notes});
  }

  renderNotesChange = (data) => {
    document.getElementById(`${data.oldName}`).innerHTML = `> ${data.name}`;
    document.querySelector('.navbar__title').value = `${data.name}`;
    document.querySelector('.note-content__input').innerHTML = `${data.body}`;
  }

  submitUserChangeHandler = () => {
    const profileForm = document.querySelector('.settings__form');
    const mediaFile = document.getElementById('mediaFile');

    profileForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      if (haveWrongInput(profileForm)) {
        return;
      }
      this.eventBus.emit(events.notesPage.submitUserChange, { profileForm });
    });
  }

  noteSaveHandler = (note) => {
    const saveBtn = document.querySelector('.save');
    saveBtn.addEventListener('click', (e) => {
      const newBody = document.querySelector('.note-content__input').value;
      const newTitle = document.querySelector('.navbar__title').value;
      eventBus.emit(events.notesPage.noteSave, {note, newBody, newTitle });
      // textArea.innerHTML = textArea.value;
      // alert(textArea.value);
    });
  };
}
