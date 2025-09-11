let s = "lEetcOde";

function sortVowels(s) {
  if (0 >= s.length) {
    return s[0];
  }
  let t = "";
  let ar = []

  const set = new Set(['a','e','i','o','u','A','E','I','O','U']);
  for (let i = 0; i < s.length; i++) {
    if (set.has(s[i])) {
      ar.push(s[i]);
    }    
  }
  ar.sort((a,b) => a.charCodeAt(0) - b.charCodeAt(0));
  console.log(ar);
  
  let idx = 0;
  for (let ch of s) {
    if (set.has(ch)) {
      t += ar[idx++];
    } else {
      t += ch;
    }
  }
  return t;
}

console.log(sortVowels(s));




/**
 * 
let str = "Hello";
for (let i = 0; i < str.length; i++) {
  console.log(str[i], "=>", str.charCodeAt(i));
}

let str = "EeOe"
let ar = []
for (let i = 0; i < str.length; i++) {
  ar.push(str.charCodeAt(i));
  
}
console.log(ar);
ar = ar.sort().reverse();

console.log(ar);

for (let ch of ar) {
  console.log(String.fromCharCode(ch));
  // console.log(ch);
  
  
}

*/