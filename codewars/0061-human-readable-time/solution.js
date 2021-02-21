function humanReadable(totalSeconds) {
  let remainingSeconds = totalSeconds;
  
  const hours = Math.floor(remainingSeconds / 3600);
  remainingSeconds %= 3600
  
  const minutes =  Math.floor(remainingSeconds / 60);
  
  const seconds = remainingSeconds % 60;
  
  return `${padTime(hours)}:${padTime(minutes)}:${padTime(seconds)}`
  
  function padTime(t) {
    return t.toString().padStart(2,'0')
  }
  
}