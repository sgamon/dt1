import {preventDefault} from './helpers/preventDefault.js'
import {addEvent} from './helpers/addEvent.js'
import {removeEvent} from './helpers/removeEvent.js'
import {applyStyles} from './helpers/applyStyles.js'
import {getNumericFormValue} from './helpers/getNumericFormValue.js'
import Room from '../models/room.js';


export default class extends HTMLElement {
  css = [
    `#rooms-panel {
      padding: 5px 5px 5px 5px;
    }`,

    `#rooms-panel > form > div {
      margin-top: 5px;
    }`,

    `#rooms-panel > form select {
      font-face: serif;
      font-size: 1em;
    }`,

    `#rooms-panel > form textarea {
      font-face: serif;
      font-size: 1em;
      width: 98%;
    }`,

    `#rooms-panel [data-id="addRoomDiv"] {
      white-space: nowrap;
      margin-top: 20px;
      padding-top: 10px;
      border-top: 1px dotted dimgrey;
    }`,

    `#rooms-panel [data-id="pNum"] {
      font-size: small;
      color: gray;
    }`,
  ]

  // shadowRoot
  tagname = 'rooms-panel'
  preventDefault = preventDefault
  addEvent = addEvent
  removeEvent = removeEvent
  applyStyles = applyStyles;
  room = new Room({name:'select...'})
  rooms = []

  constructor(props = {}) {
    super(props)
    // this.shadowRoot = header.attachShadow({mode: 'open'})
    this.tagPrefix = props.tagPrefix || ''
    this.applyStyles()

    this.rooms.push(this.room)
  }

  connectedCallback() {
    this.render()
  }

  get html() {
    return `
        <div id="${this.containerId}">
            <h3>Rooms</h3>

            <form name="roomsForm">
                <div>
                    <select name="roomName" data-btn-id="changeRoom">
                        ${this.options}
                    </select>
                    <span data-id="pNum">${this.room.paragraphNum ? `paragraph ${this.room.paragraphNum}` : ``}</span>
                </div>

                <div>
                    <textarea name="description" placeholder="description">${this.room.description}</textarea>
                </div>
                <div>
                    <button type="button" data-btn-id="saveBtn">save</button>
                </div>

                <div data-id="addRoomDiv">
                    <input name="newRoomParagraphNum" type="text" placeholder="p num" size="3">
                    <input name="newRoomName" type="text" placeholder="new room name">
                    <button type="button" data-btn-id="addRoomBtn">+</button>
                </div>
            </form>
        </div>
`
  }

  get containerId() {
    return this.tagPrefix ? `${this.tagPrefix}-${this.tagname}` : `${this.tagname}`
  }

  get options() {
    return this.rooms.map(room => `<option value="${room.name}" ${room.name === this.room.name ? 'selected' : ''}>${room.name}</option>`).join('')
  }

  get roomsForm() {
    return document.querySelector(`#${this.containerId} form[name="roomsForm"]`)
  }

  get roomsDiv() {
    return document.querySelector(`#${this.containerId} [data-panel-id="bread-crumbs"]`)
  }

  addRoom(e) {
    this.preventDefault(e)
    let newRoomName = this.roomsForm.newRoomName.value.trim();
    let newParagraghNum = getNumericFormValue(this.roomsForm.newRoomParagraphNum)
    console.log(newParagraghNum, newRoomName);
    if (newRoomName && !this.rooms.filter(room => room.name === newRoomName).length) {
      this.room = new Room({name:newRoomName, paragraphNum:newParagraghNum})
      this.rooms.push(this.room)
      this.refresh()
    }
  }

  saveRoom() {
    this.room.description = this.roomsForm.description.value.trim()
  }

  changeRoom() {
    let newRoomName = this.roomsForm.roomName.value
    this.room = this.rooms.filter(room => room.name === newRoomName)[0]
    this.refresh()
  }

  refresh() {
    this.removeEvents()
    this.render()
  }

  removeEvents() {
    if (!this.events) return
    this.events.forEach(argArray => removeEvent.apply(this, argArray))
  }

  render() {
    this.innerHTML = this.html
    this.addEvent('[data-btn-id="addRoomBtn"]', 'click', this.addRoom)
    this.addEvent('[data-btn-id="saveBtn"]', 'click', this.saveRoom)
    this.addEvent('[data-btn-id="changeRoom"]', 'change', this.changeRoom)
  }

}
