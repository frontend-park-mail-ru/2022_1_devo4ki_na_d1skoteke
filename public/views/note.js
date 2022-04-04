import { CreateLeftSide } from '../components/LeftSideBar/LeftSideBar.js';
import { CreateNoteContent } from '../components/NoteContent/NoteContent.js';
import { ApiStore } from '../store/ApiStore.js';
import {renderSettings} from "../components/Settings/Settings.js";

export const render = async (id) => {
  const body = document.getElementById('body');
  const title = document.getElementById('title');

  let book = null;
  window.bookStore.forEach((el) => {
    if (el.name === String(id)) {
      book = el;
    }
  });

  body.innerText = book.body;
  title.innerText = book.name;
};

window.render = render;

/* eslint no-param-reassign: ["error", { "props": false }] */
export const note = async (node) => {
  node.innerHTML = '';

  const page = document.createElement('div');

  page.classList.add('notion__whole__page');

  const fetchRes = await ApiStore.GetAllNotes();

  const bookStore = fetchRes.notes;

  window.bookStore = bookStore;
  // this.

  CreateLeftSide(page, { name: 'Henry', bookStore });
  const book = bookStore[0] !== undefined ? bookStore[0] : { name: '', body: '' };

  CreateNoteContent(page, { book });

  node.appendChild(page);

  const logout = document.getElementById('logout');
  logout.dataset.section = 'logout';

  const userEmail = 'idfurnl.ctfg@gmail.com';
  const userName = 'idfurnl';
  const userAvatar = 'src';
  renderSettings({
    userInfo: {
      email: `${userEmail}`,
      nickname: `${userName}`,
      avatar: `${userAvatar}`,
    },
    inputForms: [
      {
        labelname: 'Email',
        name: 'email',
        placeholder: 'Enter email',
        default_value: `${userEmail}`,
      },
      {
        labelname: 'Nickname',
        name: 'nickname',
        placeholder: 'Enter nickname',
        default_value: `${userName}`,
      },
      {
        type: 'password',
        labelname: 'Change password',
        name: 'password',
        placeholder: 'New password',
      },
    ],
  });
};
