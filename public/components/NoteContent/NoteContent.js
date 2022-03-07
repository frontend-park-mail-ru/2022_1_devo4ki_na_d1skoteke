
import { NoteContent } from './compiled/NoteContent.js';


export const CreateNotecontent = (node, context) => {
  
    const LeftSide = document.createElement('div');
  
    LeftSide.innerHTML = NoteContent(context);
    node.appendChild(LeftSide);
  
  };