function orderBreaker(input) {
  
  for (let i = 2; i < input.length; i++) {
    const curr = input[i];
    const prev = input[i - 1];
    const beforePrev = input[i - 2];
    
    if (beforePrev > prev) {
      return beforePrev;
    } else if (prev > curr) {
      if (beforePrev > curr) {
        return curr;
      } else {
        return prev;
      }
    }
  }
  return null;
}