function solution(n) {
  for (let i = 2; true; i++) {
    if (n % i === 1) return i;
  }
}