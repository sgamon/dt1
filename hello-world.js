class HelloWorld extends HTMLElement {
    shadowRoot;

    constructor(props = {}) {
        super(props);
        // this.shadowRoot = header.attachShadow({mode: 'open'});
        console.log('constructed!');
    }

    connectedCallback() {
        this.innerHTML = `<h1>Hello World!</h1>`;
        console.log('rendered!');
    }
}