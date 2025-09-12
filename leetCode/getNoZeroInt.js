const getNoZeroIntegers = (n) => {
  function hasZero(num) {
    return num.toString().includes('0');
  }

  for (let i = 1; i < n; i++) {
    let b = n - i;
    if (!hasZero(i) && !hasZero(b)) {
      return [i,b]
    }
    
  }
}


// var getNoZeroIntegers = function(n) {
//   // Helper function to check if a number contains zero
//   function hasZero(num) {
//       return num.toString().includes('0');
//   }
  
//   for (let a = 1; a < n; a++) {
//       let b = n - a;
//       if (!hasZero(a) && !hasZero(b)) {
//           return [a, b];
//       }
//   }
// };


console.log(getNoZeroIntegers(11));
console.log(getNoZeroIntegers(2));
