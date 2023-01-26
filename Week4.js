function LongestWord(sen) {
  let wordList = sen.match(/[a-z]+/gi);
  var sorted = wordList.sort(function(a, b) {
    return b.length - a.length;
  });
  // code goes here
  return sorted[0];

}

// keep this function call here
console.log(LongestWord(readline()));