function countKprimes(k, start, end) {
  
  let result = [];
  for (let num = start; num <= end; num++) {
    const primeFactors = getPrimeFactors(num);
    if (primeFactors && primeFactors.length === k) {
      result.push(num);
    }
  }
  return result;
  
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

function puzzle(s) {
  const onePrimes = countKprimes(1, 0, s);
  const threePrimes = countKprimes(3, 0, s);
  const sevenPrimes = countKprimes(7, 0, s);
  
  let numberOfSolutions = 0;
  
  for (let i = 0; i < onePrimes.length; i++) {
    for (let j = 0; j < threePrimes.length; j++) {
      for (let k = 0; k < sevenPrimes.length; k++) {
        if (onePrimes[i] + threePrimes[j] + sevenPrimes[k] === s) {
          numberOfSolutions++;
        }
      }
      
    }
  }
  
  return numberOfSolutions;
}