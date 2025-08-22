// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// let nums = [2, 7, 11, 15], target = 9;
// let nums = [2,5,5,11], target = 10;
let nums = [3, 2, 4], target = 6;

const twoSum = function (nums, target) {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = 1+i; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
      
    }
    
  }
  return;
};

console.log(twoSum(nums, target));
