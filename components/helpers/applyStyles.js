export function applyStyles() {
  if (!document.styleSheets.length) document.head.appendChild(document.createElement('style'))
  const styleSheet = document.styleSheets[document.styleSheets.length-1]
  const elementId = new RegExp(`/#${this.tagName}/g`)
  this.css
    .map(rule => rule.replace(elementId, `#${this.containerId}`))
    .forEach(rule => styleSheet.insertRule(rule))
}
