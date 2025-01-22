/**
 * @function isValidHexadecimal32
 * @description Checks if the provided string is a valid hexadecimal of exactly 32 digits.
 * @param {string} hexString - The string to check.
 * @returns {boolean} True if the string is a valid hexadecimal, otherwise false.
 */
export default function isValidHexadecimal32 (hexString) {
  const hexRegex = /^[0-9A-Fa-f]{32}$/
  return hexRegex.test(hexString)
}
