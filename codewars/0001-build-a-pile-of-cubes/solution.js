function findNb(m) {
  var num = 1;
  var sum = 0;
  while (sum < m) {
    sum += Math.pow(num, 3);
    num += 1;
  }
  return sum === m ? num - 1 : -1;
}
