function isSumOfCubes(s){
  const numbers = s.replace(/\D/g, ' ')
  .replace(/\s{2,}/g,' ')
  .trim()
  .replace(/\d{4,}/g, (a) => separateNumbers(a)).split(' ')
  .map(Number)
  .map(String)
  const cubicNumbers = numbers.filter(n=>isCubicNumber(n));
  const sum = cubicNumbers.reduce((s,n)=>s + +n,0);
  
  if (cubicNumbers.length === 0) {
    return 'Unlucky';
  }
  
  return cubicNumbers.join(' ') + ' ' +sum + ' Lucky'
}

function isCubicNumber(numString) {
  const sum = numString.split('').reduce((s,n)=>s+ Math.pow(+n,3),0);
  return sum === +numString;
}

function getSumOfArray(arr) {
  return arr.reduce((s,n)=>s+n, 0);
}

function separateNumbers(numString) {
  let result = []
  for (let i = 0; i < numString.length; i+=3) {
    result.push(numString.substring(i,i+3))
  }
  return result.join(' ')
}