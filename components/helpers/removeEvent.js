export function removeEvent(selector, eventName, fn) {
  selector = `#${this.containerId} ${selector}`
  document.querySelectorAll(selector)[0].removeEventListener(eventName, fn.bind(this))
}
