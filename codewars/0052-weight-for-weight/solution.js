function orderWeight(strng) {
  const sum = (a,b) => a + +b;
  const sumOfDigits = n => n.split('').reduce(sum,0);
  const weightedSort = (a, b) => sumOfDigits(a) - sumOfDigits(b) || a.localeCompare(b)
  
  return strng.trim().split(/\s+/).sort(weightedSort).join(' ')
}