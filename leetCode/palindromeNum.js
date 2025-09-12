const isPalindrome = function(x) {
  let revNum = x.toString().split("").reverse().join("");
  if (Number(revNum) === x) {
    return true;    
  }
  return false
  
};

let x = 121;

console.log(isPalindrome(x));
