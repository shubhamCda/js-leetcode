// Given an integer n, find the digit that occurs least frequently in its decimal representation. If multiple digits have the same frequency, choose the smallest digit.

// Return the chosen digit as an integer.
// The frequency of a digit x is the number of times it appears in the decimal representation of n.

// Example 1:

// Input: n = 1553322

// Output: 1

// Explanation:

// The least frequent digit in n is 1, which appears only once. All other digits appear twice.

// Example 2:

// Input: n = 723344511

// Output: 2

// Explanation:

// The least frequent digits in n are 7, 2, and 5; each appears only once.

function getLeastFrequentDigit(n) {
	let numAr = n.toString().split("");
	let freq = new Array(10).fill(0);
	let leastValue = 9;
	for (const val of numAr) {
		freq[Number(val)]++;
	}

	let infy = Infinity;
	for (let i = 0; i < freq.length; i++) {
    if (freq[i] < infy || (freq[i] === infy && i<leastValue)) {
      infy = freq[i];
      leastValue = i;
    }
	}

	return leastValue;
}

// console.log(getLeastFrequentDigit(1553322));
console.log(getLeastFrequentDigit(723344511));

/////////////////////////////////////////////////////////

function frequencyDigit(n) {
  const digits = n.toString().split("");

	// Count frequencies
	const freq = {};
	for (let d of digits) {
    freq[d] = (freq[d] || 0) + 1;
	}
  
	// Find minimum frequency
	let minFreq = Infinity;
	let result = 9;

	for (let d in freq) {
		let digit = parseInt(d);
		if (freq[d] < minFreq || (freq[d] === minFreq && digit < result)) {
      minFreq = freq[d];
			result = digit;
		}
	}
  
	return result;
}

// console.log(frequencyDigit(723344511));