/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let max = 0;

  let highest = Math.max(...height);
  a;
  for (let i = 0, j = height.length - 1; i < j; ) {
    let area = Math.min(height[i], height[j]) * (j - i);
    max = Math.max(max, area);
    let highestPossibleAreaRemaining = highest * (j - i - 1);
    if (highestPossibleAreaRemaining <= max) {
      break;
    }
    if (height[i] < height[j]) {
      i++;
    } else {
      j--;
    }
  }

  return max;
};
