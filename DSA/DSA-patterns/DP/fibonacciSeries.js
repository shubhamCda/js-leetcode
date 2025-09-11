const fib = (n) => {
  let dp = new Array(n + 1).fill(0);

  dp[0] = 0;
  dp[1] = 1;
  for (let i = 2; i <=n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
    
  }
  console.log(dp[n]);
  
  return dp;
}

console.log(fib(5));

function fibo(n) {
  if (n<2) {
    return n;
  }

  return fibo(n - 1) + fibo(n - 2);
}

console.log("fibo-->", fibo(5));
