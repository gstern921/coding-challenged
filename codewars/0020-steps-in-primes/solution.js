function step(g, m, n) {
  
  for (let num = m; num <= n; num++) {
    if (isPrime(num) && isPrime(num + g)) {
      return [num, num + g];
    }
  }
  
  return null;
  
  function isPrime(num) {
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
}