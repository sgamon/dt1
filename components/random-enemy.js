import { DiceRoller } from '../node_modules/rpg-dice-roller/lib/esm/bundle.min.js';
import Enemy from '../models/enemy.js';
import Names from '../models/names.js';
import {applyStyles} from './helpers/applyStyles.js'


const enemiesTable = `3. ST 15, DX 14 (11), IQ 10. Chainmail, battleaxe, two-handed sword.
4. ST 14, DX 13 (11). Leather, two-handed sword, light crossbow.
5. ST 13, DX 16. No armor. Longbow, morningstar.
6. ST 13, DX 12 (10). Leather armor, halberd, small ax.
7. Halfling. ST 9, DX 13, IQ 10. No armor. Javelin, small shield.
8. Dwarf. ST 15, DX 10 (8). Leather armor, pike axe, battleaxe.
9. ST 13, DX 11 (10). No armor. Large shield, morningstar.
10. ST 11, DX 13. No armor. Longbow, shortsword.
11. ST 12, DX 12 (9). Leather, large shield, broadsword.
12. ST 10, DX 14 (11). Chainmail, hammer, horse bow.
13. ST 11, DX 13 (11). Leather armor, small shield, mace.
14. ST 12, DX 12. No armor. Small shield, broadsword.
15. Elf. ST 9, DX 17 (15). Leather, small bow, rapier, main-gauche.
16. ST 13, DX 13 (10). Chainmail, small shield, morningstar.
17. ST 11, DX 18 (15), IQ 9. Chainmail, small shield, small ax.
18. ST 12, DX 17 (13), IQ 11. Fine plate armor, broadsword, light crossbow.`;

let enemyConfigs = enemiesTable.split('\n').map(enemy => {
  let num = parseInt(enemy.match(/^(\d+)/)[1], 10);
  let st = parseInt(enemy.match(/ST (\d+)/)[1], 10);
  let dx = parseInt(enemy.match(/DX (\d+)/)[1], 10);
  let adjDx = (() => {
    let match = enemy.match(/[(](\d+)[)]/);
    return match ? parseInt(match[1], 10) : dx;
  })();
  let race = (() => {
    let match = enemy.match(/^\d+\. (\w+)\. ST/);
    return match ? match[1].toLowerCase() : 'human';
  })();
  let iq = (() => {
    let match = enemy.match(/IQ (\d+)/);
    return match ? parseInt(match[1], 10) : 8;
  })();

  let stuff = (() => {
    let match1 = enemy.match(/DX \d+\. +(.*)\./);
    let match2 = enemy.match(/IQ \d+\. +(.*)\./);
    let match3 = enemy.match(/[(]\d+[)]\. +(.*)\./);
    if (match1) return match1[1];
    if (match2) return match2[1];
    if (match3) return match3[1];
    return '';
  })();

  let inventory = stuff.split(/\.|,/).reduce((o, thing, i) => {
    if (i === 0) {
      o.armor = thing.toLowerCase().trim();
    } else if (thing.indexOf('shield') > -1) {
      o.shield = thing.toLowerCase().trim();
    } else {
      o.weapons.push(thing.toLowerCase().trim());
    }
    return o;
  }, {weapons: []});

  let config =  Object.assign({
    num,
    st,
    dx,
    adjDx,
    iq,
    race,
  }, inventory);

  return config;
});


// create a new instance of the DiceRoller
const roller = new DiceRoller()
const names = new Names()


export default class extends HTMLElement {
  // shadowRoot;

  css = [
    `div.random-enemy > div > input {width: 1em;}`
  ]

  applyStyles = applyStyles;

  constructor(props = {}) {
    super(props);
    // this.shadowRoot = header.attachShadow({mode: 'open'});
    this.applyStyles()
    let roll = roller.roll('3d6')
    let config = enemyConfigs.filter(config  => config.num === roll.total).pop()
    config.name = names.pick()
    this.enemy = new Enemy(config)
  }

  connectedCallback() {
    this.innerHTML = `
<div class="random-enemy">
  <div><input type="text" size="3" placeholder="id"/> ${this.enemy.name}</div>
  <div>${this.enemy.toShortString()}</div>
  <div>${this.weaponSelectorHTML}</div>
  <div>${this.strengthBarHTML}</div>
</div>
`;
  }

  get strengthBarHTML() {
    let strengthBarHTML = '';
    for (let i=0; i<this.enemy.st; i++){strengthBarHTML += '<input type="checkbox"/>'}
    return strengthBarHTML;
  }

  get weaponSelectorHTML() {
    return this.enemy.weapons.reduce((str, weapon) => {
      str += `<input type="radio" name="weapon-${this.enemy.id}"\> ${weapon}`;
      return str;
    }, '');
  }
}

