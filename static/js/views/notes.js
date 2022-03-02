const leftPanel = () => {
  const leftPaneldiv = document.createElement('div');
  leftPaneldiv.classList.add('sidebar');

  return leftPaneldiv;
};

const notesTopPanel = () => {
  const topPanel = document.createElement('div');
  topPanel.classList.add('notes-top-panel');

  return topPanel;
};

export default () => {
  window.history.pushState(null, null, "/login");
  const root = document.getElementById('root');
  root.innerHTML = '';

  root.appendChild(leftPanel());

  const notes = document.createElement('div');
  notes.classList.add('notes');
  notes.appendChild(notesTopPanel());

  root.append(notes);
};
