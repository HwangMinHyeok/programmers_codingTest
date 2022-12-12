// refactoring
function solution(k, tangerine) {
  // set tangerineObj
  const tangerineObj = {};
  for (const t of tangerine) {
    tangerineObj[t] = (tangerineObj[t] || 0) + 1;
  }
  const tangerineCntArr = Object.values(tangerineObj).sort((a, b) => b - a);
  // 순서대로 더해가며 k랑 비교
  // if sum >= k, then return cnt
  let cnt = 0;
  for (let i = 0, sum = 0; i < tangerineCntArr.length; i++) {
    if (sum >= k) return cnt;
    sum += tangerineCntArr[i];
    cnt++;
  }
  return cnt;
}