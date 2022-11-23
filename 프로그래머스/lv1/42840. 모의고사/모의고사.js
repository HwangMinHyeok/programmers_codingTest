function solution(answers) {
  const patterns = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];
  // scores <- patterns의 각 pattern에 대해 점수 계산
  const scores = [];
  patterns.forEach((pattern) => {
    let cnt = 0;
    answers.forEach((el, idx) => {
      if (el === pattern[idx % pattern.length]) cnt++;
    });
    scores.push(cnt);
  });
  // get maxScore
  const maxScore = Math.max(...scores);
  // get if scores[i] === maxScore
  const result = [];
  scores.forEach((el, idx) => {
    if (el === maxScore) result.push(idx + 1);
  });
  // sort and return
  return result.sort((a, b) => a - b);
}