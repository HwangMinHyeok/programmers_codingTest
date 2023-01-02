function solution(n) {
  const fib = [0, 1];
  const getFib = (n) => {
    if (fib[n] === undefined) fib[n] = getFib(n - 1) + getFib(n - 2);
    return fib[n] % 1234567;
  };
  return getFib(n + 1);
}