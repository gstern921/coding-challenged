const fs = require("fs");
const path = require("path");

let data = fs.readFileSync(path.join(__dirname, "input.txt"), "utf-8");

if (!data) {
  throw new Error("No Data Found!");
}

let [fieldRulesInfo, myTicket , nearbyTickets] = data.split('\n\n');
const fieldRules = fieldRulesInfo.split('\n').reduce((allRules, rule) => {
  const [name, rangesInformation] = rule.split(/(?:\: )/);

  const [min1, max1, min2, max2] = rangesInformation.split(/-| or /).map(Number);
  
  allRules[name] = {min1, max1, min2, max2};
  return allRules;
}, {});

myTicket = myTicket
  .split('\n')
  .slice(1)[0]
  .split(',')
  .map(Number);

nearbyTickets = nearbyTickets
  .split('\n')
  .slice(1)
  .map(vals => vals.split(',').map(Number))

// nearbyTickets.forEach(vals => vals.forEach( val => {
//     const isInvalid = isValueInvalidForAllFieldRules(val, Object.values(fieldRules));
//     if (isInvalid) {
//       result += val;
//     }
//   } ))
  .filter(vals => vals.every( val => !isValueInvalidForAllFieldRules(val, Object.values(fieldRules))))



function isValueInvalidForAllFieldRules(value, allFieldRules) {
  const isInvalid = allFieldRules
    .every((rules) => !isValueValidForSingleFieldRules(value, rules));
    // console.log(`is ${value} invalid?: ${isInvalid}`)
    return isInvalid;
}

function isValueValidForSingleFieldRules(value, fieldRules) {
  return (value >= fieldRules.min1 && value <= fieldRules.max1) || (value >= fieldRules.min2 && value <= fieldRules.max2);
}

function areAllValuesValidForSingleFieldRules(values, fieldRules) {
  return values.every(value => isValueValidForSingleFieldRules(value, fieldRules));
}

function getValidFieldNamesForValues(values, allFieldRules) {
  const validFieldNames = [];
  for (let [name, fieldRules] of Object.entries(allFieldRules)) {
    if (areAllValuesValidForSingleFieldRules(values, fieldRules)) {
      validFieldNames.push(name);
    }
  }
  return validFieldNames;
}

function mapFieldRuleNamesToIndex(allFieldRules, nearbyTickets) {
  const rules = {};
    for (let i = 0; i < nearbyTickets[0].length; i++) {
      const values = [];
      for (let j = 0; j < nearbyTickets.length; j++) {
        values.push(nearbyTickets[j][i]);
      }

      const validFieldNames = getValidFieldNamesForValues(values, allFieldRules);

      if (validFieldNames.length) {
        if (!rules[i]) {
          rules[i] = [];
        }
        rules[i] = rules[i].concat(validFieldNames);
      }
    }

    // Remove duplicate field names from map
    const fieldRuleNames = Object.values(rules);
    let changed;
    while (changed !== false) {
      changed = false;
      for (let i = 0; i < fieldRuleNames.length; i++) {
        if (fieldRuleNames[i].length === 1) {
          for (let j = 0; j < fieldRuleNames.length; j++) {
            const index = fieldRuleNames[j].indexOf(fieldRuleNames[i][0]);
            if (i !== j && index !== -1) {
              changed = true;
              fieldRuleNames[j].splice(index, 1);
            }
          }
        }
      }
    }
    
  return rules;
}

const fieldRuleNamesByIndex = mapFieldRuleNamesToIndex(fieldRules, nearbyTickets);
const result = myTicket.filter((val, i) => {
  return fieldRuleNamesByIndex[i][0].includes('departure');
})
.reduce((product, num) => product * num, 1);
console.log(result);
return result;