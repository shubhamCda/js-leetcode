// const howSum = (nums, targetSum) => {
//   if (targetSum === 0) return [];
//   if (targetSum < 0) return null;

//   for (let num of nums) {
//     const remainder = targetSum - num;
//     const remainderResult = howSum(nums, remainder);

//     if (remainderResult !== null) {
//       return [...remainderResult, num];
//     }
//   }
//   return null;
// }

// console.log(howSum([2, 3], 7));
// console.log(howSum([5, 3, 4, 7], 7));

//Memoization of solution

const howSum = (nums, targetSum, memo={}) => {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  for (let num of nums) {
    const remainder = targetSum - num;
    const remainderResult = howSum(nums, remainder,memo);

    if (remainderResult !== null) {
      memo[targetSum] = [...remainderResult, num];
      return memo[targetSum];
    }
  }
  memo[targetSum] = null;
  return null;
}

console.log(howSum([2, 3], 7));
console.log(howSum([5,3,4,7],7));
console.log(howSum([14,7],300));

