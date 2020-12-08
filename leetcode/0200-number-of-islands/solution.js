/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  if (!grid || !grid.length || !grid[0].length) {
    return 0;
  }
  const numRows = grid.length;
  const numColumns = grid[0].length;
  const LAND = "1";
  const WATER = "0";

  let result = 0;

  const getIslandCount = (grid, row, col) => {
    if (row < 0 || col < 0 || row >= grid.length || col >= grid[0].length) {
      return 0;
    }
    let val = grid[row][col];
    if (val === WATER) {
      return 0;
    }

    grid[row][col] = WATER;

    getIslandCount(grid, row + 1, col);
    getIslandCount(grid, row - 1, col);
    getIslandCount(grid, row, col + 1);
    getIslandCount(grid, row, col - 1);

    return 1;
  };

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {
      let val = grid[row][col];
      if (val === LAND) {
        result += getIslandCount(grid, row, col);
      }
    }
  }

  return result;
};
