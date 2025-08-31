// function mergeSort(arr) {
//   if (arr.length <= 1) return arr;

//   const mid = Math.floor(arr.length / 2);
//   const left = mergeSort(arr.slice(0, mid));
//   const right = mergeSort(arr.slice(mid));

//   return merge(left, right);
// }

// function merge(left, right) {
//   const result = [];
//   let i = 0, j = 0;

//   while (i < left.length && j < right.length) {
//     if (left[i] < right[j]) {
//       result.push(left[i++]);
//     } else {
//       result.push(right[j++]);
//     }
//   }

//   return result.concat(left.slice(i)).concat(right.slice(j));
// }

const mergeSort = (arr) =>{
  if (arr.length < 2) {
    return arr;
  }
  
  let mid = Math.floor(arr.length / 2);
  let leftAr = arr.slice(0, mid);
  let rightAr = arr.slice(mid);

  return merge(mergeSort(leftAr), mergeSort(rightAr));
}


const merge = (left, right) => {
  let sortedAr = [];

  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      sortedAr.push(left.shift());
    } else {
      sortedAr.push(right.shift());
      
    }
  }

  return [...sortedAr, ...left, ...right];
}


// Example usage:
const arr = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(arr)); // [3, 9, 10, 27, 38, 43, 82]