function solution(n, m) {
  return [getGCD(n, m), getLCM(n, m)];
}

function getGCD(n, m) {
  const smaller = n > m ? m : n;
  for (let i = smaller; i >= 1; i--) {
    if (n % i === 0 && m % i === 0) return i;
  }
}

function getLCM(n, m) {
  const bigger = n > m ? n : m;
  for (let i = bigger; true; i++) {
    if (i % n === 0 && i % m === 0) return i;
  }
}