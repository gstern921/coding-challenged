function humanReadable(totalSeconds) {
  let remainingSeconds = totalSeconds;
  
  let hours = Math.floor(remainingSeconds / 3600);
  remainingSeconds -= hours * 3600;
  
  let minutes =  Math.floor(remainingSeconds / 60);
  remainingSeconds -= minutes * 60;
  
  let seconds = remainingSeconds;
  
  return `${padTime(hours)}:${padTime(minutes)}:${padTime(seconds)}`
  
  function padTime(t) {
    return t.toString().padStart(2,'0')
  }
  
}