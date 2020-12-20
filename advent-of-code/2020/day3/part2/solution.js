const fs = require("fs");
const path = require("path");

let data = fs.readFileSync(path.join(__dirname, "input.txt"), "utf-8");

if (!data) {
  throw new Error("No Data Found!");
}

const grid = data.split("\n");

const trajectories = [
  {x: 1, y: 1},
  {x: 3, y: 1},
  {x: 5, y: 1},
  {x: 7, y: 1},
  {x: 1, y: 2}
];

let totalTreesHit = 1;

for (let trajectory of trajectories) {
  const treesHit = getTreesHit(grid, trajectory);
  totalTreesHit *= treesHit;
}

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
