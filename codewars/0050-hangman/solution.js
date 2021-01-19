function Machine(wordList){
  return {
    player
  };
  
  function player(word) {
    let possibleWords = wordList.filter(w => w.length === word);
    let possibleLetters = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let latestResult = '_'.repeat(word);
    let latestLetterGuessed;
    
    return {
        guess,
        response
    };
    
    function guess() {
      
      let mostCommonLetter;
      let highestLetterWordCount = 0;
      
      for (let letter of possibleLetters) {
        // Find out how many remaining words include the current letter
        const wordCountWithLetter = getWordCountWithLetter(possibleWords, letter, latestResult);
        if (wordCountWithLetter > highestLetterWordCount) {
          highestLetterWordCount = wordCountWithLetter;
          mostCommonLetter = letter;
        }
      }
      
      // Remove most common letter from remaining letters 
      // to avoid guessing the same letter twice
      possibleLetters.splice(possibleLetters.indexOf(mostCommonLetter), 1);
      
      latestLetterGuessed = mostCommonLetter;
      return mostCommonLetter;
    }
    
    function response(result) {
      if (result === latestResult) {
        
        // Last letter guessed was incorrect
        // Filter out all possible words containing that letter
        possibleWords = possibleWords
          .filter(w => w.indexOf(latestLetterGuessed) === -1);
        
      } else {
        
        // Last letter guessed was in the word
        // Filter out all possible words which do not contain that letter
        possibleWords = possibleWords
          .filter(w => w.indexOf(latestLetterGuessed) >= 0);
        latestResult = result;
      }
    }
    
    function getWordCountWithLetter(words, letter, result) {
      let count = 0;
      for (let i = 0; i < words.length; i++) {
        for (let j = 0; j < result.length; j++) {
          if (result[j] === '_' && words[i][j] === letter) {
            count++;
            break;
          }
        }
      }
      return count;
    }
  }
}



