// 돌릴 개수 forLen: t.length - pLen + 1
// 각각 슬라이스 p.length 씩
function solution(t, p) {
  const forLen = t.length - p.length + 1;
  let cnt = 0;
  for (let i = 0; i < forLen; i++) {
    const num = Number(t.slice(i, i + p.length));
    if (num <= Number(p)) cnt++;
  }
  return cnt;
}