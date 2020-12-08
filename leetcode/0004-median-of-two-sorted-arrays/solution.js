/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  const getMedian = (arr) => {
    if (!arr.length) {
      return 0;
    }
    if (arr.length % 2 === 1) {
      return arr[Math.floor(arr.length / 2)];
    }
    return (arr[arr.length / 2] + (arr[arr.length / 2] - 1)) / 2;
  };

  // If we have an empty array of numbers,
  // the median is just the median of the other
  if (!nums1.length) {
    return getMedian(nums2);
  }

  if (!nums2.length) {
    return getMedian(nums1);
  }

  const totalLength = nums1.length + nums2.length;

  let indexOfMedian = Math.ceil(totalLength / 2) - 1;

  let nums1Index = 0;
  let nums2Index = 0;

  for (let i = 0; i < indexOfMedian; i++) {
    if (nums1Index < nums1.length && nums2Index < nums2.length) {
      // Compare the numbers in both arrays,
      // and iterate in the array with the smaller number
      if (nums1[nums1Index] < nums2[nums2Index]) {
        nums1Index++;
      } else if (nums2[nums2Index] < nums1[nums1Index]) {
        nums2Index++;
      } else {
        // If both numbers are equal, iterate the array that has the
        // most numbers remaining
        nums1.length - nums1Index > nums2.length - nums2Index
          ? nums1Index++
          : nums2Index++;
      }
      // If we have checked all numbers in either array, iterate the other
    } else if (nums1Index < nums1.length) {
      nums1Index++;
    } else {
      nums2Index++;
    }
  }
  // Get the value of the numbers at the current index for comparison
  // If we have no numbers remaining in an array,
  // use a number that is never less than the other
  let num1Value = nums1Index < nums1.length ? nums1[nums1Index] : Infinity;
  let num2Value = nums2Index < nums2.length ? nums2[nums2Index] : Infinity;

  // If there are an odd amount of numbers, the median is a single number
  if (totalLength % 2 === 1) {
    return Math.min(num1Value, num2Value);
  }

  // Otherwise, it is the average of the two middle numbers,
  // which will be the two smallest numbers remaining
  if (nums1Index >= nums1.length) {
    return (nums2[nums2Index] + nums2[nums2Index + 1]) / 2;
  }

  if (nums2Index >= nums2.length) {
    return (nums1[nums1Index] + nums1[nums1Index + 1]) / 2;
  }

  let firstHalfOfMedian;

  if (num1Value < num2Value) {
    firstHalfOfMedian = num1Value;
    nums1Index++;
    num1Value = nums1Index < nums1.length ? nums1[nums1Index] : Infinity;
  } else {
    firstHalfOfMedian = num2Value;
    nums2Index++;
    num2Value = nums2Index < nums2.length ? nums2[nums2Index] : Infinity;
  }

  let secondHalfOfMedian = Math.min(num1Value, num2Value);

  return (firstHalfOfMedian + secondHalfOfMedian) / 2;
};
