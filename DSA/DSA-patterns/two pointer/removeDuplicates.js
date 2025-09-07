const removeDuplicates = (arr) => {
  if (arr.length < 2) {
    return 1;
  }
  let start = 0

  for (let idx = 1; idx < arr.length; idx++) {
    if (arr[start] !== arr[idx]) {
      start++;
      arr[start] = arr[idx];
    }
    
  }
  console.log(arr);
  
  return start + 1;
}

console.log(removeDuplicates([1,1,2,2,3,4,4,5,6])); // 4 (unique array: [1,2,3,4,...])