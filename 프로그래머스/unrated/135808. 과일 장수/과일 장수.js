function solution(k, m, score) {
  // score.sort descending
  // let i = score에서 첫번째 k의 index ~ score.len -1
  // score = [ (bigger than k), k, ..., ]
  // m개: i ~ i+m-1
  // next i = i + m
  score.sort((a, b) => b - a);
  let result = 0;
  for (let i = score.indexOf(k); i < score.length; i += m) {
    if (score[i + (m - 1)] !== undefined) result += m * score[i + (m - 1)];
    else break;
  }
  return result;
}