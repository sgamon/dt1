import {preventDefault} from './helpers/preventDefault.js';
import {addEvent} from './helpers/addEvent.js';


export default class extends HTMLElement {
  // shadowRoot;
  tagname = 'enemies-panel';
  preventDefault = preventDefault;
  addEvent = addEvent;

  constructor(props = {}) {
    super(props);
    this.tagPrefix = props.tagPrefix || '';

    // this.shadowRoot = header.attachShadow({mode: 'open'});
  }

  connectedCallback() {
    this.innerHTML = `
<div id="${this.containerId}">
    <h3>Random Enemies</h3>
    <div>
        <button type="button" data-btn-id="addEnemyBtn">+</button>
        <button type="button" data-btn-id="removeEnemyBtn">-</button>
        <button type="button" data-btn-id="clearEnemiesBtn">Clear</button>
    </div>

    <div data-panel-id="random-enemies">
        <random-enemy></random-enemy>
        <random-enemy></random-enemy>
    </div>
</div>
`;

    this.addEvent('[data-btn-id="addEnemyBtn"]', 'click', this.addEnemy);
    this.addEvent('[data-btn-id="removeEnemyBtn"]', 'click', this.removeEnemy);
    this.addEvent('[data-btn-id="clearEnemiesBtn"]', 'click', this.clearEnemies);
  }

  get containerId() {
    return this.tagPrefix ? `${this.tagPrefix}-${this.tagname}` : `${this.tagname}`;
  }

  get randomEnemiesDiv() {
    return document.querySelector(`#${this.containerId} [data-panel-id="random-enemies"]`);
  }

  addEnemy(e) {
    this.preventDefault(e);
    let enemy = document.createElement('random-enemy');
    this.randomEnemiesDiv.appendChild(enemy);
  }

  removeEnemy(e) {
    this.preventDefault(e);
    let enemiesDiv = this.randomEnemiesDiv;
    if (enemiesDiv.children.length) {
      enemiesDiv.removeChild(enemiesDiv.lastElementChild);
    }
  }

  clearEnemies(e) {
    this.preventDefault(e);
    this.randomEnemiesDiv.innerHTML = '';
  }
}
