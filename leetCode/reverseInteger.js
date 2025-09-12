// let x = 123;
// let x = -123;
// let x = 120;
let x = 1534236469;
// let x = 901000;

const revInteger = (x) => {
  const MAX_INT = 2147483647;
  const MIN_INT = -2147483648;

  x = x.toString().split("");
  
  let revNum = "";
  for (let i = x.length - 1; 0 <= i; i--) {    
    if (x[i] === "-") {
      revNum = x[i] + revNum;
      continue;
    }
    revNum += x[i];    
  }
  if (revNum > MAX_INT || revNum < MIN_INT) {
    return 0;
  }
  return Number(revNum);  
  
}

// console.log(revInteger(1534236469));
// console.log(revInteger(x));

console.log(typeof 0);





