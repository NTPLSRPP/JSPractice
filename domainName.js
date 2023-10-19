function domainName(url) {
    // Use a regular expression to match the domain name.
    var match = url.match(/^(?:https?:\/\/)?(?:www\.)?([a-zA-Z0-9-]+)\./);
  
    // Check if a match is found and return the first capturing group.
    if (match && match[1]) {
      return match[1];
    } else {
      // Return an empty string if no domain name is found.
      return '';
    }
  }
  
  function domainName(url) {
    // Regular expression to extract domain name
    var domainRegex = /^(?:https?:\/\/)?(?:www\.)?([a-zA-Z0-9-]+)(?:\.[a-z]{2,})+(?:\/.*)?$/;
    var match = url.match(domainRegex);
    
    // If a match is found, return the domain name, else return null
    return match ? match[1] : null;
}