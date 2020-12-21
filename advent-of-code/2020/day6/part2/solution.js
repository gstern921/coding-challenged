const fs = require('fs');
const path = require('path');

let data = fs.readFileSync(path.join(__dirname, 'input.txt'), 'utf-8');

if (!data) {
  throw new Error('No Data Found!')
}

let sumOfQuestionsAnswered = 0;

const answers = [
  'a','b','c','d','e','f','g','h','i','j','k','l','m',
  'n','o','p','q','r','s','t','u','v','w','x','y','z',
]

const groups = data.split('\n\n');

for (let group of groups) {
  const groupAnswers = group.split('\n');
  const groupAnswerSet = new Set();
  for (let answer of answers) {
    const isSharedAnswer = groupAnswers.every((groupMemberAnswer) => groupMemberAnswer.includes(answer));
    if (isSharedAnswer) {
      sumOfQuestionsAnswered++;
    }
  }
}

console.log(sumOfQuestionsAnswered)
