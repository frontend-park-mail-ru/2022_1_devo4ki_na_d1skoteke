/* eslint-disable class-methods-use-this */

// import { events } from '../../consts/events.js';

export class BaseView {
  constructor(eventBus, { data = {} } = {}) {
    this.data = data;
    this.eventBus = eventBus;
  }

  render = () => {
  };
}
