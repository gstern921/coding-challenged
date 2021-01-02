function solve(x,y) {
  
  let result = 0;
  
  for (let m = 0; m < Math.log2(y); m++) {
    for (let n = 0; Math.pow(3, n) < y; n++) {
      
      const num = Math.pow(2, m) * Math.pow(3, n) + 1;
      
      if (num >= x && num <= y && isPrime(num)) {
        result++;
      }
      
    }
    
  }
  
  return result;
  
  function isPrime(num) {
    const limit = Math.sqrt(num);
    for (let i = 2; i <= limit; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return num !== 1;
  }
};