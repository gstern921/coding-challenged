var variance = function(numbers) {
  if (!numbers.length) {
    return 0;
  }
  const sum = numbers.reduce((result, num) => result += num, 0);
  const mean = sum / numbers.length;
  return numbers.reduce((result, num) => result + Math.pow(num - mean, 2), 0) / numbers.length;
};