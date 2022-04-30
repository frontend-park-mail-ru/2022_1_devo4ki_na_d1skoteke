class EventBus {
  #listeners = {};

  constructor() {
    this.#listeners = {};
  }

  on(event, callback) {
    (this.#listeners[event] || (this.#listeners[event] = new Set())).add(callback);
  }

  off(event, callback) {
    this.#listeners[event]?.delete(callback);
  }

  emit(event, ...data) {
    if (!this.#listeners[event]) {
      return;
    }
    const tmpSet = new Set(this.#listeners[event]);
    tmpSet?.forEach((listener) => listener(...data));
    // this.#listeners[event]?.forEach((listener) => listener(...data));
  }
}

export const eventBus = new EventBus();