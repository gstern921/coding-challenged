/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
  // if we have no numbers, return 1 right away
  if (!nums.length) {
    return 1;
  }

  // Sort the numbers in ascending order
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];

    // If the first number is greater than 1, return 1
    if (i === 0 && num > 1) {
      return 1;
    }

    // If we reach the last number and it is less than 1, return 1
    // Otherwise, if the last number is positive, return that number + 1
    if (i === nums.length - 1) {
      return num < 1 ? 1 : num + 1;
    }

    // If we find a non-positive number followed by a positive number greater than 1, return 1
    if (num <= 0 && nums[i + 1] > 1) {
      return 1;
    }

    // If we find a positive number followed by gap, return that number + 1
    if (num > 0 && nums[i + 1] > num + 1) {
      return num + 1;
    }
  }
};
