// const isPowerOfFour = function (n) {
// 	const x = Math.sqrt(n);
// 	console.log(x);
// 	if (x == 1) {
// 		return true;
// 	}
// 	if (n > 1) {
// 		let cal = Math.sqrt(x) % 2;
// 		if (cal == 0) {
// 			return true;
// 		}
// 	}
// 	return false;
// };

console.log(isPowerOfFour(-2147483648));
console.log(isPowerOfFour(8));
console.log(isPowerOfFour(4));
console.log(isPowerOfFour(36));

// console.log(Math.sqrt(16));

function isPowerOfFour(n) {
	if (n < 1) {
		return false;
	}

	while (n % 4 === 0) {
		n /= 4;
	}
	return n===1;
}


// function isPowerOfFour(n) {
// 	if (n < 1) {
// 		return false;
// 	}

// 	while (n>1) {
// 		if (n % 4 !== 0) {
// 			return false
// 		}

// 		n = n / 4;
// 	}
// 	return true;
// }