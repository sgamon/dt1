import {defines} from './defines.js';

defines([
  'enemies-panel', 'random-enemy', 'd-6', 'dice-panel'
]);

window.addEventListener('DOMContentLoaded', (event) => {
});

//-----------------------------------------------------------------------------

function preventDefault(e) {
  if (e && e.preventDefault) {
    e.preventDefault();
  }
}

function addEvent(elementId, eventName, fn) {
  document.getElementById(elementId).addEventListener(eventName, fn);
}

//-----------------------------------------------------------------------------

