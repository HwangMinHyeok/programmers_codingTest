function isNum(char) {
  return !isNaN(char);
}

function solution(s) {
  const numbers = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine"
  ];
  var answer = "";
  let tmpStr = "";
  for (let el of s) {
    // 단위 구분
    tmpStr += el;
    // 해당 단위가 숫자라면
    if (isNum(tmpStr)) {
      answer += tmpStr;
      tmpStr = "";
    }
    // 해당 단위가 문자열이라면
    else {
      if (numbers.includes(tmpStr)) {
        answer += numbers.indexOf(tmpStr);
        tmpStr = "";
      }
    }
  }
  return Number(answer);
}