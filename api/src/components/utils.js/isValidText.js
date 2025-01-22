/**
 * @function isValidText
 * @description Checks if the provided text is non-empty.
 * @param {string} text - The text to check.
 * @returns {boolean} True if the text is non-empty, otherwise false.
 */
export default function isValidText (text) {
  return text.trim().length > 0
}
