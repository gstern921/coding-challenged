function mix(s1, s2) {
  let s1CharacterFrequencies = getCharacterFrequencies(s1);
  let s2CharacterFrequencies = getCharacterFrequencies(s2);

  let result = [];

  let charFrequenciesSeparator = "/";

  for (let char in s1CharacterFrequencies) {
    if (s1CharacterFrequencies.hasOwnProperty(char)) {
      if (s2CharacterFrequencies.hasOwnProperty(char)) {
        if (s1CharacterFrequencies[char] === s2CharacterFrequencies[char]) {
          result.push(["=", char.repeat(s1CharacterFrequencies[char])]);
        } else if (
          s1CharacterFrequencies[char] > s2CharacterFrequencies[char]
        ) {
          result.push(["1", char.repeat(s1CharacterFrequencies[char])]);
        } else {
          result.push(["2", char.repeat(s2CharacterFrequencies[char])]);
        }
      } else {
        result.push(["1", char.repeat(s1CharacterFrequencies[char])]);
      }
    }
  }

  for (let char in s2CharacterFrequencies) {
    if (
      s2CharacterFrequencies.hasOwnProperty(char) &&
      !s1CharacterFrequencies.hasOwnProperty(char)
    ) {
      result.push(["2", char.repeat(s2CharacterFrequencies[char])]);
    }
  }

  return result
    .sort(function (charObj1, charObj2) {
      if (charObj1[1].length === charObj2[1].length) {
        if (charObj1[0] === charObj2[0]) {
          return charObj1[1].charCodeAt(0) - charObj2[1].charCodeAt(0);
        } else {
          if (charObj1[0] === "=") {
            return 1;
          } else if (charObj2[0] === "=") {
            return -1;
          }

          return charObj1[0] - charObj2[0];
        }
      } else {
        return charObj2[1].length - charObj1[1].length;
      }
    })
    .map(function (charObj) {
      return charObj.join(":");
    })
    .join(charFrequenciesSeparator);

  function getCharacterFrequencies(str) {
    if (typeof str !== "string") {
      throw new Error(
        `Invalid parameter type in getCharacterFrequencies, expected string but got ${typeof str}`
      );
    }
    let charFrequencies = {};

    if (!str.length) {
      return charFrequencies;
    }

    const validCharsRegex = /^[a-z]$/;

    let minFrequency = 2;

    for (let char of str) {
      if (validCharsRegex.test(char)) {
        charFrequencies[char] = charFrequencies[char] + 1 || 1;
      }
    }

    for (let char in charFrequencies) {
      if (
        charFrequencies.hasOwnProperty(char) &&
        charFrequencies[char] < minFrequency
      ) {
        delete charFrequencies[char];
      }
    }

    return charFrequencies;
  }
}
