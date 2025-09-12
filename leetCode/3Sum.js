const threeSum = (nums) => {
  nums.sort((a, b) => a - b);
  let ar = []
  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i-1]) {
      continue;
    }
    let k = nums.length - 1;
    let j = i + 1;
    while (j < k) {
      let sum = nums[i] + nums[j] + nums[k]
      if (sum === 0) {
        ar.push([nums[i], nums[j], nums[k]]);
        j++;
        k--;

        while (j<k && nums[j] === nums[j-1]) {
          j++;
        }
        while (j<k && nums[k] === nums[k+1]) {
          k--;
        }
      }else if (sum < 0) {
        j++;
      } else {
        k--;
      }
      
    }    
  }
  return ar;
}

let nums = [-1, 0, 1, 2, -1, -4];

console.log(threeSum(nums));
