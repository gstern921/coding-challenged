function conv(num){
  
  const digitNames = [
    'zero','one','two','three','four',
    'five','six','seven','eight','nine'
  ];
  
  let allDigits = String(num).split('').map((digit, i, digits) => {
    const isDigitCountOdd = digits.length % 2 === 1;
    const isDigitOdd = digit % 2 === 1;
    
    if (isDigitCountOdd !== isDigitOdd) {
      return digit;
    }
    
    let digitNamePattern = isDigitCountOdd
      ? digitNames[digit].toUpperCase() + digitNames[digit]
      : digitNames[digit] + digitNames[digit].toUpperCase();
    
    return digitNamePattern
      .repeat(i + 1)
      .substring(0,i+1);
            
  }).join('');
  
  return allDigits;
  
}