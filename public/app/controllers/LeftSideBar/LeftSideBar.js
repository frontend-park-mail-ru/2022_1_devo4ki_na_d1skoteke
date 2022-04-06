class LeftSideController {
  #model;

  #view;

  constructor(model, view) {
    this.#model = model;
    this.#view = view;
  }
    
  async render(node) {
    const d = await this.#model.getUpdates();
    this.#view.render(node, { name: 'Henry', bookStore: d });
  }
}

export { LeftSideController };
