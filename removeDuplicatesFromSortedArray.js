/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  for (let i = 0; i < nums.length - 1; i++){
      if (nums[i] === nums[i+1]){
          nums.splice(i,1)
          i--;
      }
  }
  return nums.length
};

const arr = [1,1,2,2,2,3,3,4,4,5,5,5,6];
console.log(removeDuplicates(arr));
console.log('arr = ', arr);