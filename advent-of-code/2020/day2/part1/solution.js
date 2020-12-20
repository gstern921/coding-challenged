const fs = require('fs');
const path = require('path');

let data = fs.readFileSync(path.join(__dirname, 'input.txt'), 'utf-8');

if (!data) {
  throw new Error('No Data Found!')
}

const result = data.split('\n')
  .filter(ruleAndPassword => {
    const [rule, password] = ruleAndPassword.split(/\s*:\s*/);
    const [ruleQuantityRange, ruleCharacter] = rule.split(/\s+/);
    const [ruleQuantityMin, ruleQuantityMax] = ruleQuantityRange.split('-');
    const characterQuantity = getCharacterQuantity(ruleCharacter, password);
    return characterQuantity >= +ruleQuantityMin && characterQuantity <= +ruleQuantityMax; 
  }).length

function getCharacterQuantity(character, str) {
  let result = 0;
  for (let char of str) {
    if (char === character) {
      result++;
    }
  }
  return result;
}
  
