function longestConsec(strarr, k) {
  if (k <= 0) return '';
  let longest = '';
  for (let i = 0; i <= strarr.length - k; i++) {
    let str = strarr[i];
    for (let j = 1; j < k; j++) {
      str += strarr[i + j];
    }
    if (str.length > longest.length) {
      longest = str;
    }
  }
  return longest;
}
