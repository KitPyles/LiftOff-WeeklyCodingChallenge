function charCount(myChar, str) {
  let count = 0;
  for (i = 0; i < str.length; i++) {
    if (str[i] === myChar) {
      count++;
    }
  }
  return count;
}