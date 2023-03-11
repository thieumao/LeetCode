/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
  let arr = [];
  const len1 = list1.length;
  const len2 = list2.length;
  let i1 = 0;
  let i2 = 0;
  while (i1 < len1 || i2 < len2) {
      if (i1 < len1 && i2 < len2) {
          if (list1[i1] < list2[i2]) {
              arr.push(list1[i1])
              i1 += 1;
          } else {
              arr.push(list2[i2]);
              i2 += 1;
          }
      } else if (i1 < len1) {
              arr.push(list1[i1])
              i1 += 1;
      } else {
              arr.push(list2[i2])
              i2 += 1;
      }
  }
  return arr;
};

const list1 = [1,3,5,7,9];
const list2 = [0,2,4,6,8,9];
console.log(mergeTwoLists(list1, list2))