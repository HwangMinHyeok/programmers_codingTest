function solution(num) {
  const fib = [0n, 1n];
  for (let i = 2; i <= num; i++) {
    fib.push(fib.at(-1) + fib.at(-2));
  }
  return Number(fib[num] % 1234567n);
}