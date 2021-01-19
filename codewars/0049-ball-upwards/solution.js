function maxBall(v0) {
  let maxHeight = -Infinity;
  let velocity = kmphToMps(v0);
  let gravity = 9.81;
  let height = 0;
  let time = 0;
  
  while (true) {
    height = getHeightAtTime(time, velocity, gravity);
    if (height < maxHeight) { return time - 1; }
    maxHeight = Math.max(maxHeight, height);
    time++;
  }
  
  function kmphToMps(velocity) {
    return velocity / 3.6;
  }
  
  function getHeightAtTime(timeInTenths, velocity, gravity) {
    const timeInSeconds = timeInTenths / 10;
    return (velocity * timeInSeconds) - ( 0.5 * gravity * timeInSeconds ** 2)
  }
  
}