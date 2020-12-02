function middlePermutation(s) {
  if (typeof s !== "string") {
    throw new Error(`Tried calling middlePermutation on a non-string: ${s}`);
  }

  let sortedChars = s.split("").sort();
  let middleIndex = Math.ceil(sortedChars.length / 2 - 1);
  let result = "";

  if (sortedChars.length <= 2) return sortedChars.join("");

  if (sortedChars.length % 2 === 0) {
    result += sortedChars[middleIndex];
    sortedChars.splice(middleIndex, 1);
  } else {
    result += sortedChars[middleIndex] + sortedChars[middleIndex - 1];
    sortedChars.splice(middleIndex - 1, 2);
  }

  result += sortedChars.reverse().join("");

  return result;
}
