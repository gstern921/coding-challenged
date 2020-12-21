const fs = require("fs");
const path = require("path");

let data = fs.readFileSync(path.join(__dirname, "input.txt"), "utf-8");

if (!data) {
  throw new Error("No Data Found!");
}

let instructions = data.split("\n");

const NORTH = "N";
const EAST = "E";
const SOUTH = "S";
const WEST = "W";

const FORWARD = "F";
const LEFT = "L";
const RIGHT = "R";

const position = {
  x: 0,
  y: 0,
};

const waypoint = {
  x: 10,
  y: 1,
};

for (let instruction of instructions) {
  const command = instruction.charAt(0);
  const amount = +instruction.substring(1);
  switch (command) {
    case FORWARD:
      moveInDirection(waypoint, amount, position);
      break;
    case RIGHT:
      rotateWaypoint(waypoint, command, amount);
      break;
    case LEFT:
      rotateWaypoint(waypoint, command, amount);
      break;
    case NORTH:
      moveWaypoint(waypoint, NORTH, amount);
      break;
    case EAST:
      moveWaypoint(waypoint, EAST, amount);
      break;
    case SOUTH:
      moveWaypoint(waypoint, SOUTH, amount);
      break;
    case WEST:
      moveWaypoint(waypoint, WEST, amount);
      break;
    default:
      break;
  }
}

console.log(Math.abs(position.x) + Math.abs(position.y));

function moveInDirection(waypoint, distance, position) {
  position.x += waypoint.x * distance;
  position.y += waypoint.y * distance;
}

function moveWaypoint(waypoint, direction, distance) {
  switch (direction) {
    case NORTH:
      waypoint.y += distance;
      break;
    case EAST:
      waypoint.x += distance;
      break;
    case SOUTH:
      waypoint.y -= distance;
      break;
    case WEST:
      waypoint.x -= distance;
      break;
    default:
      break;
  }
}

function rotateWaypoint(waypoint, direction, amount) {
  let rotationDegrees = amount % 360;

  if (direction === LEFT) {
    rotationDegrees = (360 - rotationDegrees) % 360;
  }

  switch (rotationDegrees) {
    case 90: {
      const tempY = waypoint.y;
      waypoint.y = -waypoint.x;
      waypoint.x = tempY;
      break;
    }
    case 180: {
      waypoint.x = -waypoint.x;
      waypoint.y = -waypoint.y;
      break;
    }
    case 270: {
      const tempY = waypoint.y;
      waypoint.y = waypoint.x;
      waypoint.x = -tempY;
      break;
    }
    default: {
      break;
    }
  }
}
