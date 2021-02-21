function calculateWinners(snapshot, penguins) {
  const remaining = {};
  const lanes = snapshot
    .replace(/~/g,'--')
    .replace(/^\s*\|-*P/gim,'')
    .split('\n')
  
  for (let i = 0; i < lanes.length; i++) {
    remaining[penguins[i]] = lanes[i].length
  }
  
  penguins.sort((penguinA, penguinB)=>remaining[penguinA] - remaining[penguinB])
  
  const [GOLD, SILVER, BRONZE] = penguins
  
  return `GOLD: ${GOLD}, SILVER: ${SILVER}, BRONZE: ${BRONZE}`
};