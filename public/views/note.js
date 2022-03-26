import { CreateLeftSide } from '../components/LeftSideBar/LeftSideBar.js';
import { CreateNoteContent } from '../components/NoteContent/NoteContent.js';
import { ApiStore } from '../store/ApiStore.js';


export const render = async (id, userNotes) => {
  let body = document.getElementById("body");
  let title = document.getElementById("title");

  const book = userNotes.forEach(element => {
    if (element.name = id) {
      return element;
    }
  });

  body.innerText = book.name;
  title.innerText = book.body;
  
}

/* eslint no-param-reassign: ["error", { "props": false }] */
export const note = async (node) => {

  node.innerHTML = '';

  const page = document.createElement('div');

  page.classList.add('notion__whole__page');

  const fetchRes = await ApiStore.GetAllNotes();

  const bookStore = fetchRes.notes;

  CreateLeftSide(page, { name: 'Henry', bookStore });
  const book = bookStore[0];

  CreateNoteContent(page, { book });

  node.appendChild(page);

  const logout = document.getElementById('logout');
  logout.dataset.section = 'logout';
};
