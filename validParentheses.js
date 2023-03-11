/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const brackets = new Map([ ['[',']'], ['{','}'], ['(',')'] ]);
  let stack = [];
  
  for(let b of s) {
      if(brackets.has(b)) stack.push(b);
      else if(brackets.get(stack[stack.length - 1]) == b) stack.pop();
      else return false;
  }
  return stack.length === 0;
};

console.log(isValid('()'));
console.log(isValid('()[]{}'));
console.log(isValid('(]'));