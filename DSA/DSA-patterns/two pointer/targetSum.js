const findTargetSum = (arr, target) => {
  let st = 0;
  let end = arr.length - 1;

  while (st < end) {
    let sum = arr[st] + arr[end];

    if (target === sum) {
      return true;
    }
    if (sum < target) {
      st++;
    } else {
      end--;
    }
  }
  return false;
}

console.log(findTargetSum([1, 2, 3, 4, 6], 6)); // true (2+4)
console.log(findTargetSum([1, 2, 3, 4, 6], 20)); // false