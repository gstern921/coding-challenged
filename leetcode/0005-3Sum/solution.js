/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  let result = [];

  // First, we need to sort the numbers in ascending order
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    // We are only interested in unique numbers, so skip any duplicates
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    // Set up two "pointer" variables to help speed up the search
    let leftIndex = i + 1;
    let rightIndex = nums.length - 1;

    let num1 = nums[i];

    while (leftIndex < rightIndex) {
      let leftNum = nums[leftIndex];
      let rightNum = nums[rightIndex];

      let sumOfThree = num1 + leftNum + rightNum;

      if (sumOfThree > 0) {
        // If the sum of the numbers is greater than zero,
        // then target number must be before the right index
        rightIndex--;
      } else if (sumOfThree < 0) {
        // If the sum of the numbers is less than zero,
        // then target number must be after the left index
        leftIndex++;
      } else {
        // We found a match! Add it to the results
        result.push([num1, leftNum, rightNum]);
        leftIndex++;
        while (
          // We don't want to get any duplicate results
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
