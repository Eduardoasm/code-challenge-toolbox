/**
 * @function isValidCSVFileName
 * @description Checks if the provided file name ends with '.csv'.
 * @param {string} fileName - The file name to check.
 * @returns {boolean} True if the file name ends with '.csv', otherwise false.
 */
export default function isValidCSVFileName (fileName) {
  return fileName.trim().endsWith('.csv')
}
