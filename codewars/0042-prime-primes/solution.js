const primePrimes = n => {
  const result = [];
  
  for (let denominator = 2; denominator < n; denominator++) {
    
    if (!isPrime(denominator)) continue;
    
    for (let numerator = 2; numerator < denominator; numerator++) {
      
      if (!isPrime(numerator)) continue;
      
      result.push(numerator / denominator);
    }
  }
  
  const resultSum = result.reduce((sum, next) => sum + next, 0);
  
  return [result.length, Math.floor(resultSum)];
  
  function isPrime(num) {
    
    if (num === 1) {
      return false;
    }
    
    if (num === 2) {
      return true;
    }
    
    const sqrtNum = Math.floor(Math.sqrt(num));
    for (let i = 2; i <= sqrtNum; i++) {
      if (num % i === 0) {
        return false;
      }
    } 
    return true;
  }
};