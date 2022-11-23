function solution(n) {
  const str = "수박".repeat(parseInt((n + 1) / 2));
  return str.slice(0, n);
}