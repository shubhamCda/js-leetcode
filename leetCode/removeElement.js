const removeElement = function(nums, val) {
  let n = nums.length;
  let idx = 0
  for(let i=0; i< n; i++){
      if(val !== nums[i]){
        nums[idx] = nums[i];
        idx++;
      }
  }
  // while (idx < n) {
  //   nums[idx] = val;
  //   idx++;
  // }

  return idx;
};

let nums = [3, 2, 2, 3], val = 3;
console.log(removeElement(nums,val));
