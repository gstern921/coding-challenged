function rank(st, we, n) {

  const names = st.split(',').map((n,i)=>{
    const winningNumber = getWinningNumber(n,we[i]);
    return {name: n, winningNumber};
  });
  
  if (!st || !st.length) {
    return 'No participants';
  }
  if (n > names.length) {
    return 'Not enough participants'
  }
  
  names.sort((nameA,nameB)=>{
    if (nameA.winningNumber === nameB.winningNumber) {
      return nameA.name.localeCompare(nameB.name);
    } else {
      return nameB.winningNumber - nameA.winningNumber
    }
  })
  
  return names[n - 1].name
  
  function getWinningNumber(name, weight) {
    
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let score = name.length;
    
    for (let char of name) {
      score += alphabet.indexOf(char.toLowerCase()) + 1;
    }
    
    return score * weight;
  }
  
}