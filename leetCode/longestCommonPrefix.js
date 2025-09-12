let strs = ["flower","flow","flight"]

const longestCommonPrefix = (strs) => {
  let prefxStr = strs[0];

  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefxStr) !== 0) {
      prefxStr = prefxStr.slice(0, prefxStr.length - 1);
      console.log("prefxStr-->",prefxStr);
      
      if (prefxStr === "") {
        return "";
      }
    }
    
  }
  return prefxStr;
  
}

console.log(longestCommonPrefix(strs));
