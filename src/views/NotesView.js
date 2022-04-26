/* eslint-disable */
import { BaseView } from './BaseView.js';
import { events } from '../consts/events.js';
import {renderAuthPage} from '../components/Auth/Auth.js';
import {badResponseHandler, checkAuth, haveWrongInput} from '../js/utils.js';
import {createLeftSide} from "../components/LeftSideBar/LeftSideBar.js";
import {createNoteContent} from "../components/NoteContent/NoteContent.js";
import {renderSettings} from "../components/Settings/Settings.js";

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

    createLeftSide(page,{name: context.userData.username, notes: context.notes});
    this.renderNoteContent({ note: context.note })

    this.renderSettings(context.userData);
    this.submitUserChangeHandler();
  };

  renderSettings = (context) => {
    renderSettings(context);
  };

  renderNoteContent = (data) => {
    createNoteContent(data.note);
  };

  submitUserChangeHandler = () => {
    const profileForm = document.querySelector('.settings__form');
    profileForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      if (haveWrongInput(profileForm)) {
        return;
      }
      this.eventBus.emit(events.notesPage.submitUserChange, { profileForm });
    });
  }
}
