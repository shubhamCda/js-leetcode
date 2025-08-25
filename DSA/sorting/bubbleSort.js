// Bubble Sort
// arr = [2, -1, 1, 6, 3] compare 'i' < 'j' and swap the two values

let arr = [2, -1, 1, 6, 3];

const bubbleSort = (arr) => {
	let swapped;
	do {
		swapped = false;
		for (let i = 0; i < arr.length - 1; i++) {
			if (arr[i] > arr[i + 1]) {
				let temp = arr[i];
				arr[i] = arr[i + 1];
				arr[i + 1] = temp;
				swapped = true;
			}
		}
  } while (swapped);
  return arr;
};

console.log(bubbleSort(arr));


