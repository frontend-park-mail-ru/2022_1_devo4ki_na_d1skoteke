import { CreateLeftSide } from '../components/LeftSideBar/LeftSideBar.js';
import { CreateNoteContent } from '../components/NoteContent/NoteContent.js';
import { ApiStore } from '../store/ApiStore.js';


export const render = async (id) => {
  let body = document.getElementById("body");
  let title = document.getElementById("title");

  let book = null;
  window.bookStore.forEach((el) => {
    if (el.name === String(id)) {
      book = el;
    }
  })

  body.innerText = book.body;
  title.innerText = book.name;

}

window.render = render;

/* eslint no-param-reassign: ["error", { "props": false }] */
export const note = async (node) => {

  node.innerHTML = '';

  const page = document.createElement('div');

  page.classList.add('notion__whole__page');

  const fetchRes = await ApiStore.GetAllNotes();

  const bookStore = fetchRes.notes;

  window.bookStore = bookStore;

  CreateLeftSide(page, { name: 'Henry', bookStore });
  const book = bookStore[0] !== undefined ? bookStore[0] : { name: '', body: '' };

  CreateNoteContent(page, { book });

  node.appendChild(page);

  const logout = document.getElementById('logout');
  logout.dataset.section = 'logout';
};
