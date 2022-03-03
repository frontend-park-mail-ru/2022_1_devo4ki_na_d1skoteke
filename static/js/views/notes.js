'use strict';

import { render } from "./note.js";

export const Notes = () => {
    window.history.pushState(null, null, "/notes");
    const root = document.getElementById('root');

    render(root);
}
