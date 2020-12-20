const fs = require("fs");
const path = require("path");

let data = fs.readFileSync(path.join(__dirname, "input.txt"), "utf-8");

if (!data) {
  throw new Error("No Data Found!");
}

const grid = data.split("\n");

const trajectory = { x: 3, y: 1 };

const treesHit = getTreesHit(grid, trajectory);

function getTreesHit(grid, trajectory) {
  // console.log(grid)
  let x = 0;
  let y = 0;
  let treesHit = 0;

  const TREE = "#";

  while (y < grid.length) {
    if (grid[y][x] === TREE) {
      treesHit++;
    }
    y += trajectory.y;
    x = (x + trajectory.x) % grid[0].length;
  }

  return treesHit;
}
