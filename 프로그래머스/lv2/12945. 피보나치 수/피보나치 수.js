function solution(n) {
  const fib = [0n, 1n];
  for (let i = 2; i <= n; i++) {
    fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
  }
  return fib[n] % 1234567n;
}