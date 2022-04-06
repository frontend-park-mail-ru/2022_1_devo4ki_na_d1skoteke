class AuthController {

    #model;
    #view;

    constructor(model, view) {
        this.#model = model;
        this.#view = view;
    }

    render(node, view_tag) {
        const dataModel = this.#model.getModel(view_tag);
        this.#view.render(node, dataModel);
    }
}

export { AuthController };