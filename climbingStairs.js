/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  if (n <= 2) {
      return n;
  }
  let s1 = 1;
  let s2 = 2;
  for (let i = 3; i <= n; i++){
      let sum = s1 + s2;
      s1 = s2;
      s2 = sum;
  }
  return s2;
};