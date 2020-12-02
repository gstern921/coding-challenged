/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  let result = [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    let leftIndex = i + 1;
    let rightIndex = nums.length - 1;

    let num1 = nums[i];

    while (leftIndex < rightIndex) {
      let leftNum = nums[leftIndex];
      let rightNum = nums[rightIndex];

      let sumOfThree = num1 + leftNum + rightNum;

      if (sumOfThree > 0) {
        rightIndex--;
      } else if (sumOfThree < 0) {
        leftIndex++;
      } else {
        result.push([num1, leftNum, rightNum]);
        leftIndex++;
        while (
          nums[leftIndex - 1] === nums[leftIndex] &&
          leftIndex < rightIndex
        ) {
          leftIndex++;
        }
      }
    }
  }

  return result;
};
