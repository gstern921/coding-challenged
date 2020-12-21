const fs = require("fs");
const path = require("path");

let data = fs.readFileSync(path.join(__dirname, "input.txt"), "utf-8");

if (!data) {
  throw new Error("No Data Found!");
}

let instructions = data
  .split('\n')

const NORTH = 'N';
const EAST = 'E';
const SOUTH = 'S';
const WEST = 'W';

const FORWARD = 'F';
const LEFT = 'L';
const RIGHT = 'R';

const position = {
  x: 0,
  y: 0,
}

let heading = EAST;

for (let instruction of instructions) {
  const command = instruction.charAt(0);
  const amount = +instruction.substring(1);
  switch(command) {
    case FORWARD:
      moveInDirection(heading, amount, position);
      break;
    case RIGHT:
      heading = turnShip(RIGHT, amount, heading);
      break;
    case LEFT:
      heading = turnShip(LEFT, amount, heading);
      break;
    case NORTH:
      moveInDirection(NORTH, amount, position);
      break;
    case EAST:
      moveInDirection(EAST, amount, position);
      break;
    case SOUTH:
      moveInDirection(SOUTH, amount, position);
      break;
    case WEST:
      moveInDirection(WEST, amount, position);
      break;
    default:
      break;
  }
}

console.log(Math.abs(position.x) + Math.abs(position.y));

function moveInDirection(direction, distance, position) {
  switch (direction) {
    case NORTH:
      position.y += distance;
      break;
    case EAST:
      position.x += distance;
      break;
    case SOUTH:
      position.y -= distance;
      break;
    case WEST:
      position.x -= distance;
      break;
    default:
      break;
  }
}

function turnShip(direction, amount, currentHeading) {

  const shiftIndexBy = amount / 90;

  const headings = [NORTH, EAST, SOUTH, WEST];

  const currentIndex = headings.indexOf(currentHeading);

  const newHeading = direction === RIGHT
    ? headings[(currentIndex + shiftIndexBy) % headings.length]
    : headings[(headings.length + ( currentIndex - (shiftIndexBy % headings.length))) % headings.length];

  return newHeading;

}
