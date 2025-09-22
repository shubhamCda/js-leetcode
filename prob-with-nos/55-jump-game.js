// let nums = [2, 3, 1, 1, 4];
// let nums = [3, 2, 1, 0, 4];
// let nums = [1, 2];
let nums = [2, 0];


const jumpGame = (nums) => {
  if(nums.length < 2) return true;
  for (let num of nums) {
    let idx = 0;
    if (num === 0) {
      return false;
  } 

}
return true;

}

console.log(jumpGame(nums));

/**
 * 
 * var canJump = function(nums) {
let maxReach = 0;
for (let i = 0; i < nums.length; i++) {
    if (i > maxReach) return false; // If we can't reach this index
    maxReach = Math.max(maxReach, i + nums[i]);
    if (maxReach >= nums.length - 1) return true; // Can reach last index
}
return true;
};
 * 
 */
