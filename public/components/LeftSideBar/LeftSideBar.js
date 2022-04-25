import { LeftSideBar } from './compiled/LeftSideBar.js';
import '../../img/logo_icon.svg';

export const CreateLeftSide = (node, context) => {
  const LeftSide = document.createElement('div');
  LeftSide.innerHTML = LeftSideBar(context);
  node.appendChild(LeftSide);
};
