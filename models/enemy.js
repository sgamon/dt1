export default class {
  num = 0;
  id = 0;
  name= '';
  st = 0;
  dx = 0;
  adjDx = 0;
  iq = 0;
  ma = 0;
  race = 'human';
  armor = 'none';
  shield = 'none';
  weapons = [];

  constructor(props = {}) {
    Object.assign(this, props);
  }

  toString() {
    return `ST ${this.st}, DX ${this.dx}`;
  }
}