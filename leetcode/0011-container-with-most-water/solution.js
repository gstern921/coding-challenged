/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let result = 0;

  // We take note of the highest point
  let highest = Math.max(...height);

  for (let i = 0, j = height.length - 1; i < j; ) {
    // To find the area, we take the smaller of the two heights
    // and multiply by the distance between them
    let area = Math.min(height[i], height[j]) * (j - i);

    // If this area is greater than our previous max, update the max
    result = Math.max(result, area);

    // We move the index of the smaller point toward the other index
    if (height[i] < height[j]) {
      i++;
    } else {
      j--;
    }
  }

  return result;
};
