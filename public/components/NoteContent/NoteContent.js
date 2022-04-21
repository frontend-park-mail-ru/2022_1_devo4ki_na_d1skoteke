import { NoteContent } from './compiled/NoteContent.js';
import { events } from '../../consts/events.js';
import { eventBus } from '../../modules/eventBus.js';

export const CreateNoteContent = (node, context) => {
  const LeftSide = document.createElement('div');

  LeftSide.classList.add('notion__content');
  LeftSide.innerHTML = NoteContent(context);
  node.appendChild(LeftSide);
  logoutHandler(node);
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
