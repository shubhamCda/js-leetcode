const isPowerOfFour = function (n) {
	const x = Math.sqrt(n);
	console.log(x);
	if (x == 1) {
		return true;
	}
	if (n > 0) {
		let cal = Math.sqrt(x) % 2;
		if (cal == 0) {
			return true;
		}
	}
	return false;
};

console.log(isPowerOfFour(-2147483648));
console.log(isPowerOfFour(8));
console.log(isPowerOfFour(4));
console.log(isPowerOfFour(36));

// console.log(Math.sqrt(16));
