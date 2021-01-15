function digital_root(n) {

  let sum = getSumOfDigits(n);
  
  while(getDigitCount(sum) > 1) {
    sum = getSumOfDigits(sum);
  }
  
  return sum;
  
  function getSumOfDigits(num) {
    return String(num).split('').reduce((sum, n) => sum + Number(n), 0);
  }
      
  function getDigitCount(num) {
    return String(num).length;
  }
}