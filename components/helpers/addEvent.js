export function addEvent(selector, eventName, fn) {
  this.events = this.events || [];
  this.events.push([selector, eventName, fn])

  selector = `#${this.containerId} ${selector}`
  document.querySelectorAll(selector)[0].addEventListener(eventName, fn.bind(this))
}
