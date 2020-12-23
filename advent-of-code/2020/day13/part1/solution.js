const fs = require("fs");
const path = require("path");

let data = fs.readFileSync(path.join(__dirname, "input.txt"), "utf-8");

if (!data) {
  throw new Error("No Data Found!");
}

let [estimate, buses] = data
  .split('\n');

// console.log(estimate,buses)

const activeBuses = buses.split(',').map(Number).filter((bus) => !isNaN(bus));

let closestTime = Infinity;
estimate = +estimate;
let closestBusId = null;
console.log(estimate);

for (let bus of activeBuses) {
  const busClosestTime = bus * (Math.ceil(estimate / bus));
  if (busClosestTime < closestTime) {
    closestTime = busClosestTime;
    closestBusId = bus;
  }
}

console.log(closestTime - estimate, closestBusId);
