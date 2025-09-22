let nums = [1, 2, 2, 3, 1, 4];
// let nums = [1, 2, 3, 4, 5];

const maxFrequencyElements = function(nums) {
  const freq = Array(Math.max(...nums)).fill(0);
  for (let i of nums) {
    freq[i]++;
  }
  freq.sort().reverse();
  
  let maxFreq = Math.max(...freq);
  let count = 0
  for (let fr of freq) {
    if (maxFreq === fr) {
      count++;
    }
  }

  console.log("freqArr",freq);
  console.log("maxFreq", maxFreq);
  console.log("final ans: ");
  
  return maxFreq * count;
  
};

console.log(maxFrequencyElements(nums));
