const reverseString = (str) => {
  let arr = str.split("");
  let start = 0;
  let end = arr.length - 1;
  
  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }

  return arr.join("");
}

console.log(reverseString("hello"));

