import { LeftSideController } from '../app/controllers/LeftSideBar/LeftSideBar.js';
import { NoteController } from '../app/controllers/Note/NoteController.js';
import { LeftSideBarModel } from '../app/models/LeftSideBar/LeftSIdeBar.js';
import { NoteModel } from '../app/models/Note/Note.js';
import { LeftSideBarView } from '../app/views/LeftSideBar/LeftSideBar.js';
import { NoteView } from '../app/views/Note/Note.js';
import { ApiStore } from '../store/ApiStore.js';


const app = new LeftSideController(new LeftSideBarModel(), new LeftSideBarView());

const pa = new NoteController(new NoteModel(), new NoteView());


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

  app.render(page);
  pa.render(page);

  node.appendChild(page);
};
