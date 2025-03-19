function firstWord(s) {
  // Trim leading spaces to ignore them
  s = s.trim();
  
  // Find the index of the first space
  let spaceIndex = s.indexOf(' ');

  // If there is no space, return the entire string
  if (spaceIndex === -1) {
    return s;
  }

  // Return the substring up to the first space
  return s.substring(0, spaceIndex);
}


const s = prompt("Enter String:");
alert(firstWord(s));
