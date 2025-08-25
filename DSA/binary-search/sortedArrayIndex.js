// Problem
// Given asorted array of 'n' elements and a target element 't' in the array. Return -1 if the target elements is not found.

let arr = [-5, 2, 4, 6, 10], t = 10; //should return 2
// let arr = [-5, 2, 4, 6, 10], t = 6; //should return 2
// let arr = [-5, 2, 4, 6, 10], t = 20; //should return 2

function targetIndex(arr, t) {
  let startIndex = 0;
  let endIndex = arr.length - 1;

  while (startIndex <= endIndex) {
    let pivotIndex = Math.floor((startIndex + endIndex) / 2);

    if (arr[pivotIndex] === t) {
      return pivotIndex;
    }
    if (t < arr[pivotIndex]) {
      endIndex = pivotIndex - 1;
    } else {
      startIndex = pivotIndex + 1;
    }
  }
  return -1;
}

console.log(targetIndex(arr, t));
