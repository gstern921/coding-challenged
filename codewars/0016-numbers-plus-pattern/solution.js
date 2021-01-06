function pattern(n){
  
  if (n === 0) {
    return '';
  }
  
  let result = new Array(2 * n - 1);
  
  for (let i = 1; i <= n; i++) {
    if (i === n) {
      result[i - 1] = getOnesDigit(n).toString();
      for (let j = n - 1; j >= 1; j--) {
          result[i - 1] = getOnesDigit(j) + result[i - 1] + getOnesDigit(j);
      }
    } else {
      result[i - 1] = ' '.repeat(n - 1) + getOnesDigit(i);
      result[result.length - i] = ' '.repeat(n - 1) + getOnesDigit(i);
    }
  }
  
  return result.map(num => num + '\n').join('');
  
  function getOnesDigit(num) {
    return num % 10;
  }

}