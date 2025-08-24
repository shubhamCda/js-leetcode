// Problem
// Given an array of 'n' elements and a target element 't' in the array. Return -1 if the target elements is not found.

// let arr = [-5, 2, 10, 4, 6], t = 10; //should return 2
// let arr = [-5, 2, 10, 4, 6], t = 6; //should return 4
let arr = [-5, 2, 10, 4, 6], t = 20; //should return -1

const targetIndex = (arr, t) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === t) {
      return i;
    }
    
  }
  return -1;
}

console.log(targetIndex(arr,t));
