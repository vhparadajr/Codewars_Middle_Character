
function getMiddle(s){
  let middle = Math.floor(s.length / 2);
  return s.length % 2 === 0
  ? s.slice(middle - 1, middle +1)
  :s[middle];
}
