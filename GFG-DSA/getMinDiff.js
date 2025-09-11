/**
 * 
 * Minimize the Heights II
Difficulty: MediumAccuracy: 15.06%Submissions: 741K+Points: 4Average Time: 25m

Given an array arr[] denoting heights of n towers and a positive integer k.

For each tower, you must perform exactly one of the following operations exactly once.

    Increase the height of the tower by k
    Decrease the height of the tower by k

Find out the minimum possible difference between the height of the shortest and tallest towers after you have modified each tower.

You can find a slight modification of the problem here.
Note: It is compulsory to increase or decrease the height by k for each tower. After the operation, the resultant array should not contain any negative integers.

Examples :

Input: k = 2, arr[] = [1, 5, 8, 10]
Output: 5
Explanation: The array can be modified as [1+k, 5-k, 8-k, 10-k] = [3, 3, 6, 8]. The difference between the largest and the smallest is 8-3 = 5.

Input: k = 3, arr[] = [3, 9, 12, 16, 20]
Output: 11
Explanation: The array can be modified as [3+k, 9+k, 12-k, 16-k, 20-k] = [6, 12, 9, 13, 17]. The difference between the largest and the smallest is 17-6 = 11. 

Constraints
1 ≤ k ≤ 107
1 ≤ n ≤ 105
1 ≤ arr[i] ≤ 107
 */

function getMinDiff(arr, k) {
  let n = arr.length;
  arr.sort((a, b) => a - b);  // sort ascending
  
  let ans = arr[n - 1] - arr[0];
  let smallest = arr[0] + k;
  let largest = arr[n - 1] - k;

  for (let i = 0; i < n - 1; i++) {
      let minHeight = Math.min(smallest, arr[i + 1] - k);
      let maxHeight = Math.max(largest, arr[i] + k);

      if (minHeight < 0) continue;  // invalid case

      ans = Math.min(ans, maxHeight - minHeight);
  }

  return ans;
}

let k = 3, arr = [3, 9, 12, 16, 20];

const getTowerDiff = (arr, k) => {
  arr.sort((a, b) => a - b);
  let n = arr.length;
  let min = arr[0] + k;
  let max = arr[n - 1] - k;
  let diff = max - min;
  return diff;
}

console.log(getTowerDiff(arr,k));


