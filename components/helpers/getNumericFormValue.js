export function getNumericFormValue(formElement) {
  return parseInt(formElement.value || 0, 10);
}
