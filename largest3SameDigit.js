// Largest 3-Same-Digit Number in String
let num = "6777133339";

let numAr = num.split("");
let newNumStr = "";

for (let i = 0; i < numAr.length-2; i++) {
  let newStr = numAr[i] + numAr[i + 1] + numAr[i + 2];
  // console.log(newStr);
  
  if (Number(newNumStr) < Number(newStr)) {
    newNumStr = newStr;
  }

  
}
console.log(newNumStr);



