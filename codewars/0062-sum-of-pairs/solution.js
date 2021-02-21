function sumPairs (nums, sum) {
  var seenNums = {}
  for (let i = 0; i < nums.length; i++) {
    const currentNum = nums[i];
    const diff = sum - currentNum;
    if (seenNums[diff]) {
      return [diff, currentNum];
    }
    seenNums[currentNum] = true
  }
}