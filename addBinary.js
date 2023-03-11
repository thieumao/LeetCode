/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  let result = '';
  let remember = 0;
  let i = a.length - 1;
  let j = b.length - 1;

  while (i >= 0 || j >= 0 || remember > 0) {
    if (i >= 0)
      remember += parseInt(a[i--]);
    if (j >= 0)
      remember += parseInt(b[j--]);
    result = `${remember % 2}${result}`;
    remember = remember >= 2 ? 1 : 0;
  }

  return result;
};