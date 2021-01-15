function isPangram(string){
  const chars = new Set();
  for (let char of string) {
    if (/[a-z]/i.test(char)) {
      chars.add(char.toLowerCase());
    }
  }
  return chars.size === 26;
}