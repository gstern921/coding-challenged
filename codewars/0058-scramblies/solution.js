function scramble(str1, str2) {
  const str1CharCounts = {};
  const str2CharCounts = {};
  
  for (let char of str1) {
    str1CharCounts[char] = (str1CharCounts[char] || 0) + 1;
  }
  for (let char of str2) {
    str2CharCounts[char] = (str2CharCounts[char] || 0) + 1;
  }
  
  return Object.keys(str2CharCounts).every(k=>str1CharCounts[k] >= str2CharCounts[k])
  
}
