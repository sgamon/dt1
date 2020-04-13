import {defineComponents} from './defineComponents.js';

defineComponents([
  'enemies-panel', 'random-enemy', 'd-6', 'dice-panel', 'breadcrumb-panel'
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

