function solution(progresses, speeds) {
  const minDays = []; // 각 작업을 끝내기 위해 필요한 최소 일수
  progresses.forEach((p, idx) =>
    minDays.push(Math.ceil((100 - p) / speeds[idx]))
  );

  const result = [];
  let unreleasedIdx = 0; // 아직 배포되지 않은 기능 중 첫 번째의 인덱스
  for (let i = 1; i < minDays.length; i++) {
    if (minDays[unreleasedIdx] < minDays[i]) {
      result.push(i - unreleasedIdx);
      unreleasedIdx = i;
    }
  }
  result.push(minDays.length - unreleasedIdx); // 마지막 날 배포
  return result;
}