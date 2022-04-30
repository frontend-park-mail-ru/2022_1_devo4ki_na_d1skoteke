import { NoteContent } from './compiled/NoteContent.js';
import { events } from '../../consts/events.js';
import { eventBus } from '../../modules/eventBus.js';

export const createNoteContent = (context) => {
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
  contentInputAutoResize(content);
  logoutHandler(page);
};

const logoutHandler = (node) => {
  const logout = node.querySelector('.navbar__logout-btn');
  if (logout) {
    logout.addEventListener('click', (e) => {
      e.preventDefault();
      eventBus.emit(events.notesPage.logout);
    });
  }
};

const contentInputAutoResize = (node) => {
  const textArea = node.querySelector('.note-content__input');
  textArea.addEventListener('input', (e) => {
    const { target } = e;
    target.style.height = 'auto';
    target.style.height = `${target.scrollHeight}px`;
  });
};


