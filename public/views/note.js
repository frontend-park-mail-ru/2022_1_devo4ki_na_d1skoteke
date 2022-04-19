import { CreateLeftSide } from '../components/LeftSideBar/LeftSideBar.js';
import { CreateNoteContent } from '../components/NoteContent/NoteContent.js';
import { ApiStore } from '../store/ApiStore.js';
import { renderSettings } from '../components/Settings/Settings.js';
import { haveWrongInput } from '../js/utils.js';
// import { badResponseHandler, haveWrongInput } from '../js/utils';

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

  CreateLeftSide(page, { name: 'Henry', bookStore });
  const book = bookStore[0] !== undefined ? bookStore[0] : { name: '', body: '' };

  CreateNoteContent(page, { book });

  node.appendChild(page);

  const logout = document.getElementById('logout');
  logout.dataset.section = 'logout';

  // //////////////PROFILE MENU///////////////////////
  renderSettings(await ApiStore.GetUser());

  const profileForm = document.querySelector('.settings__form');
  profileForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    if (haveWrongInput(profileForm)) {
      return;
    }

    // console.log(document.getElementById('mediaFile').files[0]);
    // хз как тут на самом деле отправлять аватарку на бек, подскажите плз
    const avatar = document.getElementById('mediaFile').value;
    const email = profileForm.email.value.trim();
    const password = profileForm.password.value.trim();
    const username = profileForm.nickname.value.trim();

    await ApiStore.ProfileChange({
      avatar, email, username, password,
    }).then(() => {
      renderSettings({
        avatar, email, username,
      });
    });
  });
};
