import { LeftSideBar } from './compiled/LeftSideBar.js';
import { eventBus } from '../../modules/eventBus.js';
import { events } from '../../consts/events.js';
import '../../img/logo_icon.svg';

export const CreateLeftSide = (node, context) => {
  const LeftSide = document.createElement('div');
  LeftSide.innerHTML = LeftSideBar(context);
  node.appendChild(LeftSide);
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
