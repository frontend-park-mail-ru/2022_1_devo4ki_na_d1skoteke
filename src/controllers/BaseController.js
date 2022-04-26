import { eventBus } from '../modules/eventBus.js';

export class BaseController {
  constructor(View, Model) {
    this.eventBus = eventBus;
    this.view = new View(eventBus);
    this.model = new Model(eventBus);
    this.events = [];
  }

  subscribe = () => {
    this.events.forEach((item) => this.eventBus.on(item.event, item.handler));
  };

  unsubscribe = () => {
    this.events.forEach((item) => this.eventBus.off(item.event, item.handler));
  };
}
