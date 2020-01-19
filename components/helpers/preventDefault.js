export function preventDefault(e) {
  if (e && e.preventDefault) {
    e.preventDefault();
  }
}
