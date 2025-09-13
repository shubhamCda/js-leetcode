const majorityElement = (nums) => {
  let freq = {};
  let n = nums.length;
  for (let n of nums) {
    freq[n] = (freq[n] || 0) + 1;
  }
  let majorElement = 0;
  for (let ele of nums) {
    if (freq[ele] > Math.floor(n/2)) {
      majorElement = ele;
    }
  }
  return majorElement;
}
// let nums = [2, 2, 1, 1, 1, 2, 2];
let nums = [3, 2, 3];
console.log(majorityElement(nums));
