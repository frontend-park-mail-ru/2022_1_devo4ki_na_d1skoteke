import { NoteContent } from './compiled/NoteContent.js';

export const CreateNoteContent = (node, context) => {
  const LeftSide = document.createElement('div');
  LeftSide.classList.add('notion__content');
  LeftSide.innerHTML = NoteContent(context);
  node.appendChild(LeftSide);
  const logout = document.getElementById('logout');
  logout.dataset.section = 'logout';
};
