// const max69Num = () => {

// }

// max69Num(9669);


let num = 9669;
// let num = 9999;

let numString = num.toString().split("");

let maxNum = 0;

for (let i = 0; i < numString.length; i++) {
	if (numString[i] == 9) {
    numString[i] = "6";
    console.log(numString);
    
	} else if (numString[i] == 6) {
    numString[i] = "9";
    console.log(numString);
	}
	maxNum = Number(numString.join(""));
	// console.log(maxNum);

	if (num <= maxNum) {
    console.log(`Maximum: ${maxNum}.`);
    break;
		
  } 
  numString = num.toString().split("");
}
