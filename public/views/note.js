import { CreateLeftSide } from '../components/LeftSideBar/LeftSideBar.js';
import { CreateNoteContent } from '../components/NoteContent/NoteContent.js';

export const note = (node) => {
  const page = document.createElement('div');
  
  page.classList.add('notion__whole__page');
  
  CreateLeftSide(page, { name: 'jhosua' });
  CreateNoteContent(page, { title: 'note number 41' });

  node.appendChild(page);
};

export default note;
