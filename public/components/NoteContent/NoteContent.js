import { NoteContent } from './compiled/NoteContent.js';
import { events } from '../../consts/events.js';
import { eventBus } from '../../modules/eventBus.js';

export const CreateNoteContent = (context) => {
  const page = document.querySelector('.notion__whole__page');

  const content = document.createElement('div');
  const existingContent = document.querySelector('.notion__content');

  content.classList.add('notion__content');
  content.innerHTML = NoteContent(context);

  if (existingContent !== null) {
    page.replaceChild(content, existingContent);
  } else {
    page.appendChild(content);
  }
  logoutHandler(page);
};

const logoutHandler = (node) => {
  const logout = node.querySelector('#logout');
  if (logout) {
    logout.dataset.section = 'logout';
    logout.addEventListener('click', (e) => {
      e.preventDefault();
      eventBus.emit(events.notesPage.logout);
    });
  }
};
