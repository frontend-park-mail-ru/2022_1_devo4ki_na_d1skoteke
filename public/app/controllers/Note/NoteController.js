import EventBus from '../../../modules/eventBus.js';
import { ApiStore } from '../../../store/ApiStore.js';

class NoteController {
  model;

  view;

  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  async init(root) {
    root.innerHTML = '';
    // ApiStore
    const hehe = await ApiStore.CheckAuth();
    // eventBus
    if (hehe === 401) {
      EventBus.emit('unauthorized', { data: '' });
      return;
    }

    EventBus.emit('authorized', { data: '' });
  }

  async render(node) {
    const book = await this.model.getNote();
    console.log(book);

    this.view.render(node, { book: { name: '1st note', body: 'Hello everybody. This is Body of the 1st note)' } });

    // this.view.render(node, book );
  }
}

export { NoteController };
