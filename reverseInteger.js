// let x = 123;
let x = -123;
// let x = 120;
// let x = 901000;

const revInteger = (x) => {
  x = x.toString().split("");
  // console.log(x);
  
  let revNum = "";
  for (let i = x.length - 1; 0 <= i; i--) {
    // console.log(x[i]);
    revNum += x[i];
    
    if (!Number(x[i]) && x[i]) {
      revNum = x[i] + revNum;
      // console.log("inside if-else", x[i]);
      continue;
    }
    
  }
  console.log(`Reverse Integer: ${revNum}`);
  
  return Number(revNum);
  
  
}

console.log(revInteger(x));


