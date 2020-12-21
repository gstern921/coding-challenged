const fs = require('fs');
const path = require('path');

let data = fs.readFileSync(path.join(__dirname, 'input.txt'), 'utf-8');

if (!data) {
  throw new Error('No Data Found!')
}

let sumOfQuestionsAnswered = 0;

const groups = data.split('\n\n');

for (let group of groups) {
  const groupAnswers = group.split('\n');
  const groupAnswerSet = new Set();
  for (let groupMemberAnswers of groupAnswers) {
    const answers = groupMemberAnswers.split('');
    for (let answer of answers) {
      groupAnswerSet.add(answer);
    }
  }
  const groupAnswerCount = groupAnswerSet.size;
  sumOfQuestionsAnswered += groupAnswerCount;
}

console.log(sumOfQuestionsAnswered)
