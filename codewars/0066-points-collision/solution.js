function pointsCollision(point1, point2, velocity1, velocity2) {
  
  const [x1,y1] = point1;
  const [x2,y2] = point2;
  
  const [vx1,vy1] = velocity1;
  const [vx2,vy2] = velocity2;
  
  if (x1 === x2 && y1 === y2) {
    return true;
  }
  
  if (x1 === x2) {
    
    if (vx1 !== vx2) {
      return false;
    } else if (y1 < y2 && vy1 > vy2) {
      return true;
    } else if (y1 > y2 && vy1 < vy2) {
      return true;
    }
    return false;
    
  } else if (y1 === y2) {
    
    if (vy1 !== vy2) {
      return false;
    } else if (x1 < x2 && vx1 > vx2) {
      return true;
    } else if (x1 > x2 && vx1 < vx2) {
      return true;
    }
    return false;
    
  } else {
    
    if (
      (x1 < x2 && vx1 <= vx2) ||
      (x1 > x2 && vx1 >= vx2)
    ) { return false; }
    
    else if (
      (y1 < y2 && vy1 <= vy2) ||
      (y1 > y2 && vy1 >= vy2)
    ) { return false; }
    
    return (x1-x2)/(vx1-vx2) === (y1-y2)/(vy1-vy2);
    
  }
  
}