function factorial(n) {
  let result = 1;
  for (let num = Math.abs(n); num > 1; num--) {
    result *= num;
  }
  if (n < 0 && n % 2 !== 0) {
    result = -result;
  }
  return result;
}