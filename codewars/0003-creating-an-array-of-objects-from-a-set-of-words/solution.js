function solve(str) {
  if (typeof str !== "string") {
    return str;
  }

  const chars = str.split("");

  let i = 0;
  let j = chars.length - 1;

  while (i < j) {
    if (chars[i] === " ") {
      i++;
      continue;
    }
    if (chars[j] === " ") {
      j--;
      continue;
    }

    const temp = chars[j];

    chars[j] = chars[i];
    chars[i] = temp;
    i++;
    j--;
  }

  return chars.join("");
}
