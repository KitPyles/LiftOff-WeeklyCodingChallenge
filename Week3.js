var reversed = "";

function FirstReverse(str) {
  reversed += str.slice(-1);
  str = str.slice(0,-1);
  if (str.length !== 0) {
    return FirstReverse(str);
  } else {
  // code goes here
  return reversed;
  }
}