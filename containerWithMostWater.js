// let height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
let height = [8, 7, 2, 1];

const maxWaterContainer = (height) => {
	let max = 0;
	let start = 0;
	let end = height.length - 1;

	while (start < end) {
		let areaCon = (end - start) * Math.min(height[start], height[end]);
		if (max < areaCon) {
			max = areaCon;
		}
		if (height[start] < height[end]) {
			start++;
		} else {
			end--;
		}
	}
	return max;
};

console.log(maxWaterContainer(height));
