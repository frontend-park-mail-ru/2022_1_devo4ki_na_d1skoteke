class LeftSideController {

    model;
    view;

    constructor(model, view) {
        this.model = model;
        this.view = view;
    }
    async render(node) {
        this.view.render(node, { name: 'Henry', bookStore })
    }
}

export { LeftSideController };