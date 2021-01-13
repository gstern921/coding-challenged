function stringBreakers(n, string){
  
  const chars = string
    .split('')
    .filter(char => char !== ' ');
  
  const startIndex = Math.floor(chars.length / n) * n;
  
  for (let i = startIndex; i >= n; i -= n) {
    if (i < chars.length) {
      chars.splice(i, 0, '\n');
    }
  }
  
  return chars.join('');
}