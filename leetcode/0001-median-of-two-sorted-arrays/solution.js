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

  if (!nums1.length) {
    return getMedian(nums2);
  }

  if (!nums2.length) {
    return getMedian(nums1);
  }

  const totalLength = nums1.length + nums2.length;

  let indexOfMedian = Math.ceil(totalLength / 2) - 1;

  let aIndex = 0;
  let bIndex = 0;

  for (let i = 0; i < indexOfMedian; i++) {
    if (aIndex < nums1.length && bIndex < nums2.length) {
      if (nums1[aIndex] < nums2[bIndex]) {
        aIndex++;
      } else if (nums2[bIndex] < nums1[aIndex]) {
        bIndex++;
      } else {
        nums1.length - aIndex > nums2.length - bIndex ? aIndex++ : bIndex++;
      }
    } else if (aIndex < nums1.length) {
      aIndex++;
    } else {
      bIndex++;
    }
  }

  let aValue = aIndex < nums1.length ? nums1[aIndex] : Infinity;
  let bValue = bIndex < nums2.length ? nums2[bIndex] : Infinity;

  if (totalLength % 2 === 1) {
    return Math.min(aValue, bValue);
  } else {
    let num1;
    if (aValue < bValue) {
      num1 = aValue;
      aIndex++;
    } else {
      num1 = bValue;
      bIndex++;
    }
    let num2;
    if (aValue < bValue) {
      num2 = aValue;
    } else {
      num2 = bValue;
    }
    return (num1 + num2) / 2;
  }
};
