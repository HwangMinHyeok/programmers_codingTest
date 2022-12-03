function solution(k, scores) {
  const honoredList = [];
  const result = [];
  for (const score of scores) {
    honoredList.push(score);
    honoredList.sort((a, b) => b - a);
    if (honoredList.length <= k) {
      result.push(honoredList[honoredList.length - 1]);
    } else {
      honoredList.splice(k);
      result.push(honoredList[k - 1]);
    }
  }
  return result;
}