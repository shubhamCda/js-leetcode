/**
 * 
 * const canConstruct = (target, wordbank) => {
if (target === "") return true;

for (let word of wordbank) {
  if (target.indexOf(word) === 0) {
    const suffix = target.slice(word.length);
    if (canConstruct(suffix, wordbank) === true) {
      return true;
    }
  }
}
return false;
};

console.log(canConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]));
console.log(
canConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])
);
console.log(
canConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
  "e",
  "ee",
  "eeeee",
  "eeeeeeee",
  "eeeeeeeeeeee",
])
);

//Time complexity: O(n^m *m)
//Space complexity: O(m^2)
 */

///////////memoization////////////////

//Time complexity: O(n*m^2)
//Space complexity: O(m^2)

const canConstruct = (target, wordbank, memo={}) => {
  if (target in memo) return memo[target];
	if (target === "") return true;

	for (let word of wordbank) {
		if (target.indexOf(word) === 0) {
			const suffix = target.slice(word.length);
      if (canConstruct(suffix, wordbank,memo) === true) {
        memo[target] = true;
				return true;
			}
		}
  }
  memo[target] = false;
	return false;
};

console.log(canConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]));
console.log(
	canConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])
);
console.log(
	canConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
		"e",
		"ee",
		"eeeee",
		"eeeeeeee",
		"eeeeeeeeeeee",
	])
);
