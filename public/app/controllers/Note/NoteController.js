class NoteController {

    model;
    view;

    constructor(model, view) {
        this.model = model;
        this.view = view;
    }

    async render(node) {
        
        const book = await this.model.getNote();
        console.log(book);

        this.view.render(node, { book: {"name":"1st note","body":"Hello everybody. This is Body of the 1st note)"}});

        // this.view.render(node, book );

    }
}

export { NoteController };