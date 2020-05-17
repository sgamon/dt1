export default class {
  num = 0
  id = 0
  name= ''
  st = 0
  dx = 0
  adjDx = 0
  iq = 0
  ma = 0
  race = 'human'
  armor = 'no armor'
  shield = ''
  weapons = []

  constructor(props = {}) {
    Object.assign(this, props)
    this.id = this.id || `${this.num}-${(new Date()).getTime()}`
  }

  toString() {
    return `${this.race} ST ${this.st}, DX ${this.dx} (${this.adjDx}), IQ ${this.iq}. ${this.armor}${this.shield ? ', '+this.shield+', ' : ' '} ${this.weapons.join(', ')}.`
  }

  toShortString() {
    return `${this.race} ST ${this.st}, DX ${this.dx} (${this.adjDx}), IQ ${this.iq}. ${this.armor}${this.shield ? ', '+this.shield : ''}.`
  }
}
