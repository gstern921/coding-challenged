/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  // if the string is empty, it can't have a prefix
  if (!strs || !strs[0] || !strs[0].length) {
    return "";
  }

  let result = "";

  // Let's start by checking to see if all strings start with the same character
  // We can use any string to check for common prefixes, I chose to use the first string
  let currentChar = strs[0][0];

  // Let's take note of how short the shortest string is for later
  let shortestStringLength = Infinity;

  for (let i = 0; i < strs.length; i++) {
    // If not all strings start with the same character, we don't have a common prefix
    if (strs[i][0] !== currentChar) {
      return "";
    }
    // Check each string to find the shortest one
    shortestStringLength = Math.min(shortestStringLength, strs[i].length);
  }
  let matches = true;
  let i = 0;
  // We keep looking for common prefixes
  while (matches) {
    result += currentChar;
    i++;
    // The common prefix cannot be longer than the shortest string
    if (i >= shortestStringLength) {
      return result;
    }
    // Keep looking until we no longer have a common prefix
    currentChar = strs[0][i];
    matches = strs.every((str) => str[i] === currentChar);
  }
  return result;
};
