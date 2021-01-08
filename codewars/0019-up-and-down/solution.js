function arrange(strng) {
  
  const words = strng.split(' ');
  
  for (let i = 0; i < words.length; i++) {
    const currentWordLength = words[i].length;
    const nextWord = words[i + 1];
    
    if (i < words.length - 1) {
      const nextWordLength = nextWord.length;
      
      if (isOdd(i) && nextWordLength > currentWordLength) {
        swap(words, i, i + 1);
      } else if (isEven(i) && nextWordLength < currentWordLength) {
        swap(words, i, i + 1);
      }
      
    }
    
    words[i] = isOdd(i) ? words[i].toUpperCase() : words[i].toLowerCase();
    
  }
  
  return words.join(' ');
  
  function isEven(num) {
    return num % 2 === 0;
  }
  function isOdd(num) {
    return num % 2 === 1;
  }
  
  function swap(arr, firstIndex, secondIndex) {
    const temp = arr[firstIndex];
    arr[firstIndex] = arr[secondIndex];
    arr[secondIndex] = temp;
  }
  
}