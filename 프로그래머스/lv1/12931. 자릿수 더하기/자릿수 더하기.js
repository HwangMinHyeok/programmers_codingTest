function solution(n) {
  let sum = 0;
  while (n >= 1) {
    sum += n % 10;
    n = parseInt(n / 10);
  }
  return sum;
}