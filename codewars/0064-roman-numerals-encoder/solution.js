function solution(number){
  let result = '';
  let num = number;
  const vals = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90,
    L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 };

  while(num > 0) {
    let curr = ''

    if (num >= 1000) { curr = 'M'; }
    else if (num >= 900) { curr = 'CM'; }
    else if (num >= 500) { curr = 'D'; }
    else if (num >= 400) { curr = 'CD'; }
    else if (num >= 100) { curr = 'C'; }
    else if (num >= 90) { curr = 'XC'; }
    else if (num >= 50) { curr = 'L'; }
    else if (num >= 40) { curr = 'XL'; }
    else if (num >= 10) { curr = 'X'; }
    else if (num >= 9) { curr = 'IX'; }
    else if (num >= 5) { curr = 'V'; }
    else if (num >= 4) { curr = 'IV'; }
    else { curr = 'I'; }

    result += curr;
    num -= vals[curr];
  }
  return result;
}