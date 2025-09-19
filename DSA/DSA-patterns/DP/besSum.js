const bestSum = (nums, targetSum, memo={}) => {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  let shortCombination = null;

  for (let num of nums) {
    const remainder = targetSum - num;
    const remainderCombination = bestSum(nums, remainder, memo);

    if (remainderCombination !== null) {
      const combination = [...remainderCombination, num];
      if (shortCombination === null || combination.length < shortCombination.length) {
        shortCombination = combination;
      }
    }
  }
  memo[targetSum] = shortCombination;
  return shortCombination;
}

console.log(bestSum([2, 3], 7));
console.log(bestSum([5,3,4,7],7));
console.log(bestSum([14,7],300));
