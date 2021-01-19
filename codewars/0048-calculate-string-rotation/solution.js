function shiftedDiff(first,second){
    
  let shiftedFirst = first;
  
  for (let i = 0; i < first.length; i++) {
    if (shiftedFirst === second) return i;
    shiftedFirst = shiftCharToFront(shiftedFirst);
  }
  
  return -1;
  
  function shiftCharToFront(str) {
    return str.substring(str.length - 1) + str.substring(0,str.length - 1)
  }
}