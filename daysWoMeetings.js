// let days = 10;
// let meetings = [[5, 7], [1, 3], [9, 10]];

// let days = 5;
// let meetings = [[2, 4], [1, 3]]

// let days = 6;
// let meetings = [[1, 6]];
let missingDays = 0;

// meetings.forEach((element) => {
// 	missingDays += element[1] - element[0] + 1;
// });
// if (missingDays === days) {
// 	missingDays = 0;
// 	console.log(missingDays);
// } else if (missingDays !== 0) {
// 	let absMeet = Math.abs(days - missingDays);

// 	console.log(absMeet);
// }

let days = 8;
let meetings = [[3, 4], [4, 8], [2, 5], [3, 8]];

const ex = meetings.sort((a, b) => a[0] - b[0]);
console.log(ex); //[ [ 2, 5 ], [ 3, 4 ], [ 3, 8 ], [ 4, 8 ] ]	

// meetings.forEach((element) => {
// 	missingDays += element[1] - element[0] + 1;
// });
// if (missingDays !== 0) {
// 	let absMeet = Math.abs(days - missingDays);

// 	console.log(absMeet);
// }
// console.log(missingDays);

