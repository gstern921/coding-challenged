function sumFibs(n) {
  let result = 0;
  
  let twoPrev = 0;
  let onePrev = 1;
  let fib = 1;
  
  for (let i = 3; i <= n; i++) {
    twoPrev = onePrev;
    onePrev = fib;
    fib = twoPrev + onePrev;
    if (fib % 2 === 0) {
      result += fib;
    }
  }
  
  return result;
  
};