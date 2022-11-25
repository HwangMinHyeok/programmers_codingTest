function solution(a, b) {
  return a.reduce((sumproduct, cur, idx) => sumproduct + cur * b[idx], 0);
}