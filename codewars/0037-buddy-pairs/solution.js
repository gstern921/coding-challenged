function buddy(start,limit) {
  
  const divisorSums = {};
  
  for (let num = start; num <= limit; num++) {
    divisorSums[num] = divisorSums[num] || getProperDivisors(num).reduce(reduceSum, 0);
    const buddyNum = divisorSums[num] - 1;
    
    if (buddyNum > num) {
      divisorSums[buddyNum] = divisorSums[buddyNum] || getProperDivisors(buddyNum).reduce(reduceSum, 0);
      if (divisorSums[buddyNum] === num + 1) {
        return [num, buddyNum];
      }
    }
    
  }
  
  return "Nothing";
  
  function getProperDivisors(num) {
    const result = [1];
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        const div1 = num / i;
        result.push(i);
        if (div1 !== i) {
          result.push(div1);
        }
      }
    }
    return result;
  }
  
  function reduceSum(sum, nextNum) {
    return sum + nextNum;
  }
}