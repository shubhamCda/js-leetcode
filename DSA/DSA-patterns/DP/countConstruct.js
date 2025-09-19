/**
 * 
 * const countConstruct = (target, wordbank) => {
if (target === "") return 1;

let totalCount = 0;
for (let word of wordbank) {
  if (target.indexOf(word) === 0) {
    const numWaysSuffix = countConstruct(target.slice(word.length), wordbank);
    totalCount += numWaysSuffix;
  }
}
return totalCount;
}

console.log(countConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]));
console.log(
countConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])
);
console.log(
countConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
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


/////////memoization//////

//Time complexity: O(n*m^2)
//Space complexity: O(m^2)

const countConstruct = (target, wordbank, memo={}) => {
  if (target in memo) return memo[target];
  if (target === "") return 1;

  let totalCount = 0;
  for (let word of wordbank) {
    if (target.indexOf(word) === 0) {
      const numWaysSuffix = countConstruct(target.slice(word.length), wordbank,memo);
      totalCount += numWaysSuffix;
    }
  }
  memo[target] = totalCount;
  return totalCount;
}

console.log(countConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]));
console.log(
	countConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])
);
console.log(
	countConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
		"e",
		"ee",
		"eeeee",
		"eeeeeeee",
		"eeeeeeeeeeee",
	])
);
