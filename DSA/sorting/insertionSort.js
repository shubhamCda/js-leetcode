// What is Insertion Sort?

// Insertion sort builds the final sorted array one item at a time. It picks each element (called the next to insert – NTI) and places it in the correct position in the already sorted part of the array.

/**
 
Step 1: Insert 20

NTI = 20

SE (Sorted Element) = -6

Compare -6 > 20? → ❌ No

So, 20 stays after -6

Array → [-6, 20, 8, -2, 4]

Step 2: Insert 8

NTI = 8

Compare with 20: 20 > 8? → ✅ Yes → shift 20 to right

Compare with -6: -6 > 8? → ❌ No

Place 8 after -6

Array → [-6, 8, 20, -2, 4]

Step 3: Insert -2

NTI = -2

Compare with 20: 20 > -2? → ✅ Yes → shift 20

Compare with 8: 8 > -2? → ✅ Yes → shift 8

Compare with -6: -6 > -2? → ❌ No

Place -2 after -6

Array → [-6, -2, 8, 20, 4]

Step 4: Insert 4

NTI = 4

Compare with 20: 20 > 4? → ✅ Yes → shift 20

Compare with 8: 8 > 4? → ✅ Yes → shift 8

Compare with -2: -2 > 4? → ❌ No

Place 4 after -2

Array → [-6, -2, 4, 8, 20]
  
 */

let arr = [-6, 20, 8, -2, 4];

const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    const insertNext = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > insertNext ) {
      arr[j + 1] = arr[j];
      j -= 1;
    }
    arr[j + 1] = insertNext;
    
  }
  return arr;
}

console.log(insertionSort(arr));
