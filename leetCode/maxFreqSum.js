/**
 * 
 * @param {*} s 
 * Example 1:

Input: s = "successes"

Output: 6

Explanation:

    The vowels are: 'u' (frequency 1), 'e' (frequency 2). The maximum frequency is 2.
    The consonants are: 's' (frequency 4), 'c' (frequency 2). The maximum frequency is 4.
    The output is 2 + 4 = 6.

Example 2:

Input: s = "aeiaeia"

Output: 3

Explanation:

    The vowels are: 'a' (frequency 3), 'e' ( frequency 2), 'i' (frequency 2). The maximum frequency is 3.
    There are no consonants in s. Hence, maximum consonant frequency = 0.
    The output is 3 + 0 = 3.


 */

const maxFreqSum = (s) => {
  const set = new Set(['a', 'e', 'i', 'o', 'u']);
  let freq = {};

  for (let ch of s) {
    freq[ch] = (freq[ch] || 0) + 1;
  }
  console.log("char", freq);
  
  let maxVowels = 0;
  let maxConson = 0;

  for (let ch of s) {
    console.log("ch-->",ch);
    
    if (set.has(ch)) {
      maxVowels = Math.max(maxVowels, freq[ch]);
    } else {
      maxConson = Math.max(maxConson, freq[ch]);
      
    }
  }
  console.log("maxVowels", maxVowels);
  console.log("maxCons", maxConson);
  
  
  return maxVowels + maxConson;
}
let s = "successes";
console.log(maxFreqSum(s));
