const fs = require("fs");
const path = require("path");

let data = fs.readFileSync(path.join(__dirname, "input.txt"), "utf-8");

if (!data) {
  throw new Error("No Data Found!");
}

let [fieldRulesInfo, _ , nearbyTickets] = data.split('\n\n');
const fieldRules = fieldRulesInfo.split('\n').reduce((allRules, rule) => {
  const [name, rangesInformation] = rule.split(/(?:\: )/);

  const [min1, max1, min2, max2] = rangesInformation.split(/-| or /).map(Number);
  
  allRules[name] = {min1, max1, min2, max2};
  return allRules;
}, {});

let result = 0;

nearbyTickets = nearbyTickets
  .split('\n')
  .slice(1)
  .map(vals => vals.split(',').map(Number))
  .forEach(vals => vals.forEach( val => {
    const isInvalid = isValueInvalidForAllFieldRules(val, Object.values(fieldRules));
    if (isInvalid) {
      result += val;
    }
  } ))


function isValueInvalidForAllFieldRules(value, allFieldRules) {
  const isInvalid = allFieldRules
    .every((rules) => {
      return (value < rules.min1 || value > rules.max1) && (value < rules.min2 || value > rules.max2);
    })
    return isInvalid;
}
console.log(result);
