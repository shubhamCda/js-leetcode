let arr = [-6, 20, 8, -2, 4];

const quickSort = (arr) => {
	if (arr.length < 2) {
		return arr;
	}

	let pivot = arr[arr.length - 1];
	let leftAr = [];
	let rightAr = [];

	for (let i = 0; i < arr.length - 1; i++) {
		if (arr[i] < pivot) {
			leftAr.push(arr[i]);
		} else {
			rightAr.push(arr[i]);
		}
  }
  console.log(`leftAr: ${leftAr}, rightAr: ${rightAr}`);
  
	return [...quickSort(leftAr), pivot, ...quickSort(rightAr)];
};

console.log(quickSort(arr));
