/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const dict = {};

  for (let i = 0; i < nums.length; i++) {
       const first = nums[i];
       const second = target - nums[i];
    if (dict[second] !== undefined) {
      return [dict[second], i];
    } else {
      dict[first] = i;
    }
  }

  return [];
};

const nums = [2,7,11,15]; 
const target = 9;
const result = twoSum(nums, target);
console.log(result);