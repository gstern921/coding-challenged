const decodeMorse = function(morseCode){
  return morseCode
    .trim()
    .split(/\s{3}/)
    .map(
      w => w.split(' ')
         .map(c => MORSE_CODE[c])
         .join('')
    ).join(' ')
}