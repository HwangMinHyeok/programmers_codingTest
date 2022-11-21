function solution(a, b) {
  let big = a > b ? a : b;
  let small = a > b ? b : a;
  let sum = 0;
  for (let i = small; i <= big; i++) {
    sum += i;
  }
  return sum;
}