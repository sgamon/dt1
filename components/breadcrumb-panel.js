import {preventDefault} from './helpers/preventDefault.js'
import {addEvent} from './helpers/addEvent.js'
import {applyStyles} from './helpers/applyStyles.js'
import {getNumericFormValue} from './helpers/getNumericFormValue.js'


export default class extends HTMLElement {
  css = [
    `#breadcrumb-panel > form {
    margin-bottom: 10px;
    padding-bottom: 10px;
    border-bottom: 1px dotted dimgrey;
  }`,

    `#breadcrumb-panel > form > div > input[type=text] {
    width: 75px;
    display: inline-block;
  }`,

    `#breadcrumb-panel > form > div > label {
    width: 100px;
    display: inline-block;
    text-align: right;
  }`,

    `#breadcrumb-panel > form .form-buttons {
    text-align: center;
    padding: 10px;
  }`,

    `#breadcrumb-panel > form .form-buttons button {
    text-size: 1.5em;
  }`,
  ]

  // shadowRoot
  tagname = 'breadcrumb-panel'
  preventDefault = preventDefault
  addEvent = addEvent
  applyStyles = applyStyles;
  breadcrumbs = []

  constructor(props = {}) {
    super(props)
    // this.shadowRoot = header.attachShadow({mode: 'open'})
    this.tagPrefix = props.tagPrefix || ''
    this.applyStyles()

    this.breadcrumbs.push(this.firstParagraph)
  }

  connectedCallback() {
    this.innerHTML = `
<div id="${this.containerId}">
    <h3>Bread-crumbs</h3>
    <form name="breadcrumbForm">
        <div class="form-input">
          <label>Paragraph</label>
          <input type="text" value="" name="number" autocomplete="off"  />
        </div>
        <div class="form-buttons">
          <button type="button" data-btn-id="addBreadcrumbBtn">Add</button>
          <button type="button" data-btn-id="clearBreadcrumbsBtn">Clear</button>
        </div>
    </form>
    <div data-panel-id="bread-crumbs"></div>
</div>
`

    this.addEvent('[data-btn-id="addBreadcrumbBtn"]', 'click', this.addBreadcrumb)
    this.addEvent('[data-btn-id="clearBreadcrumbsBtn"]', 'click', this.clearBreadcrumbs)

    this.updateBreadcrumbs()
  }

  get containerId() {
    return this.tagPrefix ? `${this.tagPrefix}-${this.tagname}` : `${this.tagname}`
  }

  get breadcrumbForm() {
    return document.querySelector(`#${this.containerId} form[name="breadcrumbForm"]`)
  }

  get breadcrumb() {
    return getNumericFormValue(this.breadcrumbForm.number)
  }

  get breadcrumbsDiv() {
    return document.querySelector(`#${this.containerId} [data-panel-id="bread-crumbs"]`)
  }

  addBreadcrumb(e) {
    this.preventDefault(e)
    this.breadcrumbs.push(this.breadcrumb)
    this.clearBreadcrumb()
    this.updateBreadcrumbs()
  }

  updateBreadcrumbs() {
    this.breadcrumbsDiv.innerHTML = this.breadcrumbs.join(', ')
  }

  clearBreadcrumb(e) {
    this.preventDefault(e);
    this.breadcrumbForm.number.value = ''
  }

  clearBreadcrumbs(e) {
    this.preventDefault(e)
    this.breadcrumbs = [this.firstParagraph]
    this.updateBreadcrumbs()
  }

  get firstParagraph() {
    return parseInt(this.getAttribute('first-paragraph'), 10)
  }

  set firstParagraph(newValue) {
    this.setAttribute('first-paragraph', newValue)
  }
}
