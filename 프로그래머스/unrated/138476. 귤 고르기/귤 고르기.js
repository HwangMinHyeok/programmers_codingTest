function solution(k, tangerine) {
  // tangerineKey: tangerine 중복 제거 배열
  // cntTangerineKey <- push: tangerine에서 각 tangerineSize의 개수
  // cntTangerineKey.sort - descending
  const tangerineKey = Array.from(new Set(tangerine));
  const cntTangerineKey = [];
  for (let i = 0; i < tangerineKey.length; i++) {
    let cnt = 0;
    for (let j = 0; j < tangerine.length; j++) {
        if(tangerine[j] === tangerineKey[i]) cnt++;
    }
    cntTangerineKey.push(cnt);
  }
  cntTangerineKey.sort((a, b) => b - a);
  // 순서대로 더해가며 k랑 비교
  // if sum >= k, then return cnt
  let cnt = 0;
  for (let i = 0, sum = 0; i < cntTangerineKey.length; i++) {
    if (sum >= k) return cnt;
    sum += cntTangerineKey[i];
    cnt++;
  }
  return cnt;
}