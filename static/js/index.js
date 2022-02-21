// import Notes from './views/notes.js';

// Notes()

const leftPanel = () => {
    const leftPanel = document.createElement('div');
    leftPanel.classList.add('sidebar');

    return leftPanel;
}

const notesTopPanel = () => {
    const topPanel = document.createElement('div');
    topPanel.classList.add('top-panel');

    return topPanel;
}

const Notes = () => {
    const root = document.getElementById('root');
    root.innerHTML = '';

    root.appendChild(leftPanel());

    const notes = document.createElement('div');
    notes.classList.add('notes');
    notes.appendChild(notesTopPanel());

    root.append(notes);

}

Notes()
