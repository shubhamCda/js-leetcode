//let fruits = [1, 2, 1];
// let fruits = [0, 1, 2, 2];
// let fruits = [1, 2, 3, 2, 2];
let fruits = [3,3,3,1,2,1,1,2,3,3,4];

let obj = {};

for (let i = 0; i < fruits.length; i++) {
	if (fruits[i] !== 0) {
		if (!obj[fruits[i]]) {
			obj[fruits[i]] = 1;
		} else {
			obj[fruits[i]] += 1;
			
		}
	}
}

let basketArr = Object.values(obj).sort((a, b) => b-a);
console.log(basketArr);
console.log(basketArr[0] + basketArr[1]);
