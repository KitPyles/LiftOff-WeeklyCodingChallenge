function detectWord(str) {
  let word = str.replace(/[^a-z]/g, '')
  return word;
}