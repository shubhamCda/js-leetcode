// Climbing Staircase

// Problem - Given a staircase of 'n' SVGTextPositioningElement, count the number of distinct ways to climb to the top.You can either climb 1 step / 2 steps at a time.

// n = 1, climbingStaircase(1) = 1    | (1)
// n = 2, climbingStaircase(2) = 2    | (1,1) and (2)
// n = 3, climbingStaircase(3) = 3    | (1,1,1) (1,2) and (2,1)
// n = 4, climbingStaircase(4) = 5    | (1,1,1,1) (1,1,2) (1,2,1) (2,1,1) and (2,2)


const climbingStaircase = (n) => {
  let noOfWays = [1, 2];

  for (let i = 2; i <= n; i++) {
    noOfWays[i] = noOfWays[i - 1] + noOfWays[i - 2];
    
  }
  console.log(noOfWays);
  
  return noOfWays[n - 1];

}

console.log(climbingStaircase(1));
console.log(climbingStaircase(2));
console.log(climbingStaircase(5));
