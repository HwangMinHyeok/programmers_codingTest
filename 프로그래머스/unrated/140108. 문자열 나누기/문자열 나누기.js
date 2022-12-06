function solution(s) {
  // s 순회
  // x: 단위 첫 글자
  // if x 개수 === x 외 개수 -> split++, x 갱신, xCnt/yCnt 초기화
  // split++ ; 분리된 문자열의 개수 = split + 1
  let split = 0;
  let x = s[0];
  let xCnt = 1;
  let yCnt = 0;
  for (let i = 1; i < s.length; i++) {
    if (xCnt === yCnt) {
      x = s[i];
      xCnt = 1;
      yCnt = 0;
      split++;
      continue;
    }
    if (x === s[i]) xCnt++;
    else yCnt++;
  }
  return ++split;
}