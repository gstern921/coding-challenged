function spinWords(str){
  const spin = w => w.length > 4 ? w.split('').reverse().join('') : w
  return str.split(' ')
    .map(spin)
    .join(' ');
}