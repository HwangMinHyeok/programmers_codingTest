// * 등장 횟수 큰 놈부터 더해가며 k랑 비교 *
function solution(k, tangerine) {
  // tangerineKeys = tangerine 중복 제거 배열
  // 빈 배열 info 에 tangerineKeys의 각 요소의 개수 push
  // info.sort descending
  const tangerineKeys = Array.from(new Set(tangerine));
  const info = [];
  tangerineKeys.forEach((key) =>
    info.push(tangerine.filter((size) => size === key).length)
  );
  info.sort((a, b) => b - a);

  //   let cnt = 0;
  //   info.reduce((sum, cur, idx, src) => {
  //     if (sum >= k) {
  //       cnt = idx;
  //       src.splice(idx + 1);
  //     }
  //     return sum + cur;
  //   }, 0);

  let cnt = 0;
  for (let i = 0, sum = 0; i < info.length; i++) {
    if (sum >= k) break;
    sum += info[i];
    cnt++;
  }
  return cnt;
}