// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// let nums = [2, 7, 11, 15], target = 9;
// let nums = [2,5,5,11], target = 10;

const twoSum = function (nums, target) {
	for (let i = 0; i < nums.length - 1; i++) {
		let j = nums.length - 1;
		while (i < j) {
			if (nums[i] + nums[j] === target) {
				return [i, j];
			}

			j--;
		}
	}
	return;
};

// let nums = [3, 2, 4],
// 	target = 6;
// console.log(twoSum(nums, target));

const twoSumDSA = (nums, target) => {
	if (target === 0) {
		return true;
	}
	if (target < 0) return false;

	for (let val of nums) {
		const remainder = target - val;
		if (twoSumDSA(nums, remainder) === true) {
			// console.log(remainder);

			return true;
		}
	}
	return false;
};

// let nums = [2, 4], target = 7;

// console.log(twoSumDSA(nums,target));

//Memoization

const twoSumMemo = (nums, target, memo = {}) => {
	if (target in memo) return memo[target];
	if (target === 0) return true;
	if (target < 0) return false;
	for (let val of nums) {
		let remainder = target - val;
		if (twoSumMemo(nums, remainder,memo) === true) {
			memo[target] = true;
			return true;
		}
  }
  memo[target] = false;
  return false;
};

// let nums = [3, 2, 4],
// 	target = 10;

// let nums = [2, 7, 11, 15], target = 1000;
// let nums = [2,5,5,11], target = 10;

let nums = [2, 4], target = 7;


console.log(twoSumMemo(nums,target));

