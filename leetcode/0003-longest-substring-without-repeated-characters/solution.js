/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  // If we have an empty string, it has no substrings
  if (!s) {
    return 0;
  }

  // We will keep track of each character we come across,
  // and how many times we have seen it
  const charFrequency = {};
  charFrequency[s[0]] = 1;
  let startIndex = 0;
  let endIndex = 1;
  let result = 1;

  // Keep track of the length of the longest unique substring so far
  let currentMax = 1;

  // Helper methods to add or remove characters from the frequency map
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
      currentMax++;
      addToCharFrequency(endChar, charFrequency);
      result = Math.max(result, currentMax);
      endIndex++;
      continue;
    }

    // We only get here when we find a repeat character
    if (startIndex < endIndex) {
      // We slide the left index forward, and remove
      // it from the group of characters we have seen
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
