function leftPanel() {
    const leftPanel = document.createElement('div');
    leftPanel.classList.add('sidebar');
}

export function Notes() {
    const root = document.getElementById('root');
    root.innerHTML = '';

    const notes = document.createElement('div');
    
    leftPanel();

}