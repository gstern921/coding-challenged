function decomp(n) {
  
  const primeFactorCount = [];
  
  for (let num = n; num > 0; num--) {
    const primeFactors = getPrimeFactors(num);
    for (let factor of primeFactors) {
      primeFactorCount[factor] = primeFactorCount[factor] || 0;
      primeFactorCount[factor]++;
    }
  }
  
  return primeFactorCount
    .map((count, factor) => count > 1 ? `${factor}^${count}` : `${factor}`)
    .filter(count => typeof count !== 'undefined')
    .join(' * ')
  
  function getPrimeFactors(n) {
    
    if (n <= 1) {
      return [];
    }
    
    const primeFactors = [];
    
    let num = n;
    
    while(!isPrime(num)) {
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
          primeFactors.push(i);
          num = num / i;
          break;
        }
      }
    }
    
    primeFactors.push(num);
    return primeFactors;
    
  }
  
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
}