function berlinClock(time) {
  const [hours, minutes, seconds] = time.split(':').map(Number);
  const result = [];
  
  const topLight = getTopLight(seconds);
  const firstRow = getFirstRow(hours);
  const secondRow = getSecondRow(hours);
  let thirdRow = getThirdRow(minutes)
  const fourthRow = getFourthRow(minutes);
  
  result.push(topLight);
  result.push(firstRow);
  result.push(secondRow);
  result.push(thirdRow);
  result.push(fourthRow)
  
  return result.join('\n');
  
  function getTopLight(seconds) {
    return seconds % 2 ? 'O' : 'Y';
  }
  
  function getFirstRow(hours) {
    const row = [];
    for (let i = 1; i <= 4; i++) {
      if (hours >= 5 * i) {
        row.push('R');
      } else {
        row.push('O');
      }
    }
    return row.join('');
  }
  
  function getSecondRow(hours) {
    const row = [];
    for (let i = 1; i <= 4; i++) {
      if (hours % 5 >= i) {
        row.push('R');
      } else {
        row.push('O');
      }
    }
    return row.join('');
  }
  
  function getThirdRow(minutes) {
    const row = [];
    for (let i = 1; i <= 11; i++) {
      if (minutes >= i * 5) {
        if (i === 3 || i === 6 || i === 9) {
          row.push('R');
        } else {
          row.push('Y');
        }
      } else {
        row.push('O');
      }
    }
    return row.join('');
  }
  
  function getFourthRow(minutes) {
    const row = [];
    for (let i = 1; i <= 4; i++) {
      if (minutes % 5 >= i) {
        row.push('Y');
      } else {
        row.push('O');
      }
    }
    return row.join('');
  }
}