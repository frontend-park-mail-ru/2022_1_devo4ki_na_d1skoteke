'use strict';

import { render } from "./note";

const leftPanel = () => {
    const leftPanel = document.createElement('div');
    leftPanel.classList.add('sidebar');

    return leftPanel;
}

const notesTopPanel = () => {
    const topPanel = document.createElement('div');
    topPanel.classList.add('notes-top-panel');

    return topPanel;
}

export const Notes = () => {
    window.history.pushState(null, null, "/notes");
    const root = document.getElementById('root');

    render(root);
}
