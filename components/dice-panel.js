import {preventDefault} from './helpers/preventDefault.js'
import {addEvent} from './helpers/addEvent.js'
import {applyStyles} from './helpers/applyStyles.js'
import {getNumericFormValue} from './helpers/getNumericFormValue.js'


export default class extends HTMLElement {
  css = [
    `#dice-panel > form > div > input[type=number] {
      width: 75px;
      display: inline-block;
    }`,

    `#dice-panel > form > div > label {
      width: 100px;
      display: inline-block;
      text-align: right;
    }`,

    `#dice-panel > form {
      margin-bottom: 10px;
      border-bottom: 1px dotted dimgrey;
    }`,

    `#dice-panel > form .form-buttons {
      text-align: center;
      padding: 10px;
    }`,

    `#dice-panel > form .form-buttons button {
      text-size: 1.5em;
    }`,

    `div[data-panel-id="die-rolls"] {
      border-bottom: 1px dotted dimgrey;
    }`,
]

  // shadowRoot
  tagname = 'dice-panel'
  preventDefault = preventDefault
  addEvent = addEvent
  applyStyles = applyStyles

  constructor(props = {}) {
    super(props)
    // this.shadowRoot = header.attachShadow({mode: 'open'})
    this.tagPrefix = props.tagPrefix || ''
    this.applyStyles()
  }

  connectedCallback() {
    this.innerHTML = `
<div id="${this.containerId}">
    <h3>Dice</h3>
    <form name="diceForm">
        <div class="form-input">
          <label>Dice</label>
          <input type="number" min="1" value="3" name="number" />
        </div>        
        <div class="form-input">
          <label>Adds</label>
          <input type="number" value="0" name="adds" />
        </div>
        <div class="form-buttons">
          <button type="button" data-btn-id="rollDieRollsBtn">Roll</button>
          <button type="button" data-btn-id="clearDieRollsBtn">Clear</button>
        </div>
    </form>
    <div data-panel-id="die-rolls">
        <d-6></d-6>
        <d-6></d-6>
        <d-6></d-6>
    </div>
    <div>TOTAL: <span data-panel-id="total"></span></div>
</div>
`

    this.addEvent('[data-btn-id="rollDieRollsBtn"]', 'click', this.rollDieRolls)
    this.addEvent('[data-btn-id="clearDieRollsBtn"]', 'click', this.clearDieRolls)
  }

  get containerId() {
    return this.tagPrefix ? `${this.tagPrefix}-${this.tagname}` : `${this.tagname}`
  }

  get dieRollsDiv() {
    return document.querySelector(`#${this.containerId} [data-panel-id="die-rolls"]`)
  }

  get diceForm() {
    return document.querySelector(`#${this.containerId} form[name="diceForm"]`)
  }

  get numDice() {
    return getNumericFormValue(this.diceForm.number)
  }

  get adds() {
    return getNumericFormValue(this.diceForm.adds)
  }

  updateTotal() {
    let totalField = document.querySelector(`#${this.containerId} [data-panel-id="total"]`)
    totalField.innerHTML = this.value.toString()
  }

  rollDieRolls() {
    this.clearDieRolls()
    for (let i=0; i<this.numDice; i++) {
      this.addDie()
    }
    this.updateTotal(this.value)
  }

  addDie(e) {
    this.preventDefault(e)
    let die = document.createElement('d-6')
    this.dieRollsDiv.appendChild(die)
  }

  removeDie(e) {
    this.preventDefault(e)
    let dieRollsDiv = this.dieRollsDiv
    if (dieRollsDiv.children.length) {
      dieRollsDiv.removeChild(dieRollsDiv.lastElementChild)
    }
  }

  get value() {
    let dieRollsDiv = this.dieRollsDiv
    let value = 0
    if (dieRollsDiv.children.length) {
      value = Array.from(dieRollsDiv.children).reduce((val, el) => {
        return val + el.roll.pips
      }, this.adds)
    }
    return value
  }

  clearDieRolls(e) {
    this.preventDefault(e)
    this.dieRollsDiv.innerHTML = ''
    this.updateTotal()
  }
}
