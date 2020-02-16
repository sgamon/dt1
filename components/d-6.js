import D6 from '../models/d6.js';

export default class extends HTMLElement {
  // shadowRoot;

  d6 = new D6();

  constructor(props = {}) {
    super(props);
    // this.shadowRoot = header.attachShadow({mode: 'open'});
    this.roll = this.d6.roll();
  }

  connectedCallback() {
    this.innerHTML = `
<div class="d-6">
    <img src="data:image/svg+xml;base64, ${this.roll.base64Face}" alt="${this.roll.pips}" />
</div>
`;
  }
}

