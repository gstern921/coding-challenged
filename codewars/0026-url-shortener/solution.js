const shortenedURLs= {};
const longURLs = {};
const currentPath = [];

function urlShortener(longURL) {
  const url = longURL;
  if (!shortenedURLs[url]) {
    
    incrementCurrentPath(currentPath);
    const shortenedURL = `short.ly/${currentPath.join('')}`
    shortenedURLs[longURL] = shortenedURL;
    longURLs[shortenedURL] = url;
    return shortenedURL;
  }
  
  return shortenedURLs[url];
  
  function incrementCurrentPath(currentPath, index = 0) {
    if (index >= currentPath.length) {
      currentPath.push('a');
    } else if (currentPath[index] === 'z') {
      currentPath[index] = 'a';
      incrementCurrentPath(currentPath, index + 1);
    } else {
      const charCode = currentPath[index].charCodeAt(0);
      currentPath[index] = String.fromCharCode(charCode + 1);
    }
    
    if (currentPath.length > 4) {
      throw new Error('Url path too long, exceeded 4 characters.')
    }
  }
}

function urlRedirector(shortURL) {
  return longURLs[shortURL];
}