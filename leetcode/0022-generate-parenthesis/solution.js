/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(leftRemaining, rightRemaining = leftRemaining, current='', result = []) {
  if (leftRemaining < 0 || rightRemaining < 0) return;
  if (leftRemaining > rightRemaining) return;
  if (rightRemaining === 0) { 
      result.push(current);
      return;
  }
  
  generateParenthesis(leftRemaining - 1, rightRemaining, current+'(', result)
  generateParenthesis(leftRemaining, rightRemaining - 1, current+')', result)
  
  return result;
};