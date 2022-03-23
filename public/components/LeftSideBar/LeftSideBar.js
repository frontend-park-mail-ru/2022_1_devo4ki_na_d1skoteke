import { LeftSideBar } from './compiled/LeftSideBar.js';

export const CreateLeftSide = (node, context) => {

  const LeftSide = document.createElement('div');
  LeftSide.innerHTML = LeftSideBar(context);
  node.appendChild(LeftSide);

};
