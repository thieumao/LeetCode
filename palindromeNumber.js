/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  return `${x}` === reverseString(`${x}`);
};

function reverseString(str) {
  const length = str.length;
  let s = ""
  for (let i = 0; i < length; i++) {
      s = `${str[i]}${s}`; 
  }
  return s;
}

console.log(isPalindrome(-121))