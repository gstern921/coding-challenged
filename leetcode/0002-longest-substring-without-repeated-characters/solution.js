/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (!s) {
    return 0;
  }
  const charFrequency = {};
  charFrequency[s[0]] = 1;
  let startIndex = 0;
  let endIndex = 1;
  let result = 1;

  let currentMax = 1;

  const addToCharFrequency = (char, charFrequency) => {
    charFrequency[char] = charFrequency[char] ? charFrequency[char] + 1 : 1;
  };
  const removeCharFromFrequency = (char, charFrequency) => {
    if (!charFrequency[char]) {
      throw new Error(`char ${char} cannot be removed from frequency`);
    }
    charFrequency[char]--;
  };
  const isRepeatChar = (char, charFrequency = {}) => {
    return charFrequency[char] > 0;
  };

  while (endIndex < s.length) {
    let startChar = s[startIndex];
    let endChar = s[endIndex];
    if (!isRepeatChar(endChar, charFrequency)) {
      // We found a unique character, keep looking for more
      addToCharFrequency(endChar, charFrequency);
      currentMax++;
      result = Math.max(result, currentMax);
      endIndex++;
      continue;
    }

    // We only get here when we find a repeat character
    if (startIndex < endIndex) {
      removeCharFromFrequency(startChar, charFrequency);
      currentMax--;
      startIndex++;
    } else {
      // We must make sure start index stays before end index
      endIndex++;
    }
  }
  return result;
};
