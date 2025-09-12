const getGcd = (a, b) => {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

console.log(getGcd(48, 18)); // Output: 6
console.log(getGcd(101, 10)); // Output: 1