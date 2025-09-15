let nums = [1, 1, 1, 2, 2, 3];

const removeDuplicates = function(nums) {
  let i = 0;
    for (let n of nums) {
        // keep at most 2 duplicates
        if (i < 2 || n > nums[i - 2]) {
            nums[i] = n;
            i++;
        }
    }
    return i;
};

console.log(removeDuplicates(nums));
