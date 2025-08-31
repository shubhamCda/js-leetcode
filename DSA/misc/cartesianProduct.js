const arr1 = [1, 2];
const arr2 = [3, 4, 5];

const cartesianProduct = (arr1, arr2) => {
let newArr = [];

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      newArr.push([arr1[i], arr2[j]]);
      
    }
    
  }
  return newArr;
}

console.log(cartesianProduct(arr1, arr2));
