function solution(absolutes, signs) {
  return absolutes.reduce((acc, cur, idx) => {
    return signs[idx] ? acc + cur : acc - cur;
  }, 0);
}