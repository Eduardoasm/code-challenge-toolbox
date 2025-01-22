/**
 * @function isValidNumber
 * @description Checks if the provided value is a valid number.
 * @param {*} value - The value to check.
 * @returns {boolean} True if the value is a valid number, otherwise false.
 */
export default function isValidNumber (value) {
  const number = Number(value)
  return !isNaN(number) && isFinite(number)
}
