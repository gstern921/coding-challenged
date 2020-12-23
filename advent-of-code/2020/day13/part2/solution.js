const fs = require("fs");
const path = require("path");

let data = fs.readFileSync(path.join(__dirname, "input.txt"), "utf-8");

if (!data) {
  throw new Error("No Data Found!");
}

const buses = data.split('\n')[1].replace(/x/g, '1').split(',');

console.log(
  buses.slice(1).reduce(
    ([last, multiplier], current, i) => {
      for (let found = +last; ; found += multiplier) {
        if ((found + i + 1) % current === 0) {
          return [found, multiplier*current];
        }
      }
    },
    [buses[0], buses[0]]
  )[0]
);
