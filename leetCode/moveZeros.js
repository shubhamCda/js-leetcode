/*
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

 

Example 1:

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]

Example 2:

Input: nums = [0]
Output: [0]

 

Constraints:

    1 <= nums.length <= 104
    -231 <= nums[i] <= 231 - 1

    for (let i = 0; i < nums.length-1; i++) {
      if (nums[i] === 0) {
        [nums[i], nums[i + 1]] = [nums[i + 1], nums[i]];
      }
      console.log(nums);
      
    }
*/

let nums = [0, 1, 0, 3, 12];

const moveZeroes = (nums) => {
  if (nums.length < 2) {
    return nums[0];
  }
  let idx = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[idx] = nums[i];
      idx++;
    }
    
  }

  while (idx < nums.length) {
    nums[idx] = 0;
    idx++;
  }
  return nums;
}

console.log(moveZeroes(nums));
