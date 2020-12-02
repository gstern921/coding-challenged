function formatDuration(seconds) {
  var secs, names, result, finalTerm;
  secs = seconds;
  result = [];

  if (seconds === 0) {
    return "now";
  }

  names = ["year", "day", "hour", "minute", "second"];

  result = [31536000, 86400, 3600, 60, 1].reduce(function (
    prevValue,
    time,
    index
  ) {
    if (secs >= time) {
      var units = Math.floor(secs / time);
      secs %= time;
      units =
        units > 1 ? `${units} ${names[index]}s` : `${units} ${names[index]}`;
      prevValue.push(units);
    }
    return prevValue;
  },
  []);

  finalTerm = result.length > 1 ? " and " + result.pop() : "";

  return result.join(", ") + finalTerm;
}
