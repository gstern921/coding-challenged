const fs = require('fs');
const path = require('path');

let data = fs.readFileSync(path.join(__dirname, 'input.txt'), 'utf-8');

if (!data) {
  throw new Error('No Data Found!')
}

const result = data.split('\n')
  .filter(ruleAndPassword => {
    const [rule, password] = ruleAndPassword.split(/\s*:\s*/);
    const [ruleIndexRange, ruleCharacter] = rule.split(/\s+/);
    const [allowedIndexOne, allowedIndexTwo] = ruleIndexRange.split('-');
    const charOne = password.charAt(allowedIndexOne - 1);
    const charTwo = password.charAt(allowedIndexTwo - 1);
    return (charOne === ruleCharacter || charTwo === ruleCharacter) && charOne !== charTwo;
  }).length  
