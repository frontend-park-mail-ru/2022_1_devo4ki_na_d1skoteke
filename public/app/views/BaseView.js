// import { events } from '../../consts/events.js';

export class BaseView {
  constructor(eventBus, { data = {} } = {}) {
    this._data = data;
    this.eventBus = eventBus;
  }

  emitGetContent = () => {};

  render = () => {
    this.emitGetContent();
  };
}
