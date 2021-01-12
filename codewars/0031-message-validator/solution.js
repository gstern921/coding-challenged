function isAValidMessage(message){
  if (message === '') {
    return true;
  }
  
  const wordLengths = message
    .replace(/[a-z]+$/, '')
    .split(/[a-z]+/i)
    .map(Number);
  const words = message
    .replace(/^\d+/, '')
    .split(/\d+/i);
  
  return words.every((word, i) => {
    return word.length === wordLengths[i];
  });
}