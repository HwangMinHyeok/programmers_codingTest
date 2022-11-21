function solution(n) {
  const arr = n.toString().split("");
  arr.sort((a, b) => b - a);
  return Number(arr.join(""));
}