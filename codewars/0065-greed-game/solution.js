function score( dice ) {

  const counts = {};

  for (let roll of dice) {
    counts[roll] = (counts[roll] || 0) + 1;
  }
  
  const scoreVals = [
    null,
    [0,100,200,1000,1100,1200,1300],
    [0,0,0,200,200,200,200],
    [0,0,0,300,300,300,300],
    [0,0,0,400,400,400,400],
    [0,50,100,500,550,600,650],
    [0,0,0,600,600,600,600]
  ];
  
  let score = 0;
  
  Object.keys(counts).forEach(roll=>{
    score += scoreVals[roll][counts[roll]]
  });
  
  return score;
}