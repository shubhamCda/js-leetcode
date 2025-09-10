/**
 * 
 * Given a string s, find the length of the longest

without duplicate characters.

 

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.

Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

 

Constraints:

    0 <= s.length <= 5 * 104
    s consists of English letters, digits, symbols and spaces.

 * 
 */

// let s = "pwwkew";
//let s = "bbbbb";
// let s = "abcabcbb";
let s = "au";

var lengthOfLongestSubstring = function (s) {
	let set = new Set();
	let left = 0,
		maxLen = 0;

	for (let right = 0; right < s.length; right++) {
		while (set.has(s[right])) {
			set.delete(s[left]);
			left++;
		}
		set.add(s[right]);
		maxLen = Math.max(maxLen, right - left + 1);
	}

	return maxLen;
};

console.log(longestSubStr(s));

// let str = " ";
// console.log(str.length);
