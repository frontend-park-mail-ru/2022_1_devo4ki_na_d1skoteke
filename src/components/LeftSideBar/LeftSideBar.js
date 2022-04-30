import { LeftSideBar } from './compiled/LeftSideBar.js';
import { eventBus } from '../../modules/eventBus.js';
import { events } from '../../consts/events.js';
import '../../img/logo_icon.svg';

export const createLeftSide = (context) => {
  const page = document.querySelector('.notion__whole__page');

  const existingLeftSide = document.querySelector('.notion__content');

  const leftSide = document.createElement('div');
  leftSide.classList.add('notion__left-bar');
  leftSide.innerHTML = LeftSideBar(context);

  if (existingLeftSide !== null) {
    page.replaceChild(leftSide, existingLeftSide);
  } else {
    page.appendChild(leftSide);
  }
  addNotesSwitching(context.notes);
};

const addNotesSwitching = (notes) => {
  const noteTitles = document.querySelectorAll('.left-sidebar__note-title');
  noteTitles.forEach((link, idx) => {
    link.addEventListener('click', () => {
      eventBus.emit(events.notesPage.noteSwitch, { note: notes[idx] });
    });
  });
};
