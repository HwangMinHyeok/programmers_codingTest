function sumofEach(num) {
  let sum = 0;
  while (num >= 1) {
    sum += num % 10;
    num = parseInt(num / 10);
  }
  return sum;
}

function solution(x) {
  return x % sumofEach(x) === 0;
}