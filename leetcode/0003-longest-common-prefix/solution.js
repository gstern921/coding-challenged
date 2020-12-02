/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (!strs || !strs[0] || !strs[0].length) {
    return "";
  }
  let result = "";
  let i = 0;
  let currentPrefix = strs[0][i];

  let matches = strs.every((str) => str.startsWith(currentPrefix));
  if (!matches) {
    return result;
  }

  while (matches) {
    result += strs[0][i];
    i++;
    if (i >= strs[0].length) {
      return strs[0];
    }
    currentPrefix += strs[0][i];
    matches = strs.every((str) => str.startsWith(currentPrefix));
  }
  return result;
};
