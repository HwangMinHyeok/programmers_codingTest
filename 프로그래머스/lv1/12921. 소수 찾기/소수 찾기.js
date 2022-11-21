function isPrime(num) {
  if (num === 2) return true;
  if (num % 2 === 0) return false;
  const max = Math.sqrt(num);
  for (let i = 3; i <= max; i += 2) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
function solution(n) {
  let primeCnt = 0;
  for (let i = 2; i <= n; i++) {
    if (isPrime(i)) {
      primeCnt++;
    }
  }
  return primeCnt;
}