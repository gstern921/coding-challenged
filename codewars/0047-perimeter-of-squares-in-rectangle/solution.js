function perimeter(n) {

  const nums = fibSequence(n);
  const SQUARE_SIDES = 4;
  
  return nums.reduce((sum, next) => sum + next * SQUARE_SIDES, 0);
  
  function fibSequence(n) {
    if (n < 0) throw new Error('Invalid n value in function fib, n = ' + n);
    if (n < 1) {
      return [1];
    }
    
    const result = [1, 1];
    
    for (let i = 2; i <= n; i++) {
      const a = result[i - 2];
      const b = result[i - 1];
      const fib = a + b;
      result.push(fib);
    }
    return result;
  }
}