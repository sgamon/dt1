import {defines} from './defines.js';

defines([
  'enemies-panel', 'random-enemy'
]);

window.addEventListener('DOMContentLoaded', (event) => {
  // addEvent('addEnemyBtn', 'click', addEnemy);
  // addEvent('removeEnemyBtn', 'click', removeEnemy);
  // addEvent('clearEnemiesBtn', 'click', clearEnemies);
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

