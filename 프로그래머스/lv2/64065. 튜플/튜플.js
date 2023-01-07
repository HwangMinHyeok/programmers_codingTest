// 입력 string -> array
function convertToArray(s) {
  return s
    .slice(2, s.length - 2)
    .split("},{")
    .map(str => str.split(",").map((strNum) => Number(strNum)));
}
// 길이 순 ascending sort
// 튜플에 없는 놈만 넣기
function solution(s) {
  const arr = convertToArray(s);
  arr.sort((a, b) => a.length - b.length);
  const tuple = new Set();
  arr.forEach(ak => {
    tuple.add(...ak.filter((el) => !tuple.has(el)));
  });
  return Array.from(tuple);
}