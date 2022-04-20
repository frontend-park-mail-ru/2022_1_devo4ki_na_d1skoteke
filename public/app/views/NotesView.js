/* eslint-disable */
import { BaseView } from './BaseView.js';
import { events } from '../../consts/events.js';
import {renderAuthPage} from '../../components/Auth/Auth.js';
import {badResponseHandler, haveWrongInput} from '../../js/utils.js';
import {CreateLeftSide} from "../../components/LeftSideBar/LeftSideBar.js";
import {CreateNoteContent} from "../../components/NoteContent/NoteContent.js";

export class NotesView extends BaseView {
  constructor(eventBus, { data = {} } = {}) {
    super(eventBus, data);
  }

  render = (data) => {
    console.log('data in render View: ', data);
    const root = document.getElementById('root');
    root.innerHTML = '';

    const page = document.createElement('div');
    page.classList.add('notion__whole__page');

    CreateLeftSide(page, { name: 'Henry', notes: data.notes });

    CreateNoteContent(page, { note: data.note });

    root.appendChild(page);

    const logout = document.getElementById('logout');
    logout.dataset.section = 'logout';
  };

}
