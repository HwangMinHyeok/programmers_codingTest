function solution(num) {
  let cnt = 0;
  for (let i = 0; i < 500; i++, cnt++) {
    if (num === 1) return cnt;
    if (num % 2 === 0) num /= 2;
    else num = num * 3 + 1;
  }
  return -1;
}