function caesarEncode(phrase, shift) {
  return phrase
    .split(' ')
    .map((word, i) => shiftWord(word, shift + i))
    .join(' ');
  
  function shiftWord(word, shiftDistance) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let result = '';
    for (let char of word) {
      const indexOfChar = alphabet.indexOf(char);
      if (indexOfChar === -1) {
        throw new Error('Unable to encrypt character ' + char);
      }
      result += alphabet[(indexOfChar + shiftDistance) % alphabet.length];
    }
    return result;
  }
}
