function solution(X, Y) {
  // X, Y의 각 숫자의 개수를 가진 객체 반환
  // i=9~0, i가 두 객체에 모두 존재할 때, // for문 종료 후에는 가장 큰 숫자가 result에 저장
  // 더 적은 value만큼 result = ""에 추가
  const xObj = getNumObj(X);
  const yObj = getNumObj(Y);
  let result = "";
  for (let i = 9; i >= 0; i--) {
    if (xObj[i] && yObj[i]) {
      let lesser = xObj[i] > yObj[i] ? yObj[i] : xObj[i];
      result += String(i).repeat(lesser);
    }
  }
  if (result.length === 0) return "-1";
  if (result[0] === "0" && result[result.length - 1] === "0") return "0";
  return result;
}

// 해당 문자열의 각 숫자의 개수
function getNumObj(str) {
  const obj = {};
  for (let i = 0; i < str.length; i++) {
    if (str[i] in obj) obj[str[i]]++;
    else obj[str[i]] = 1;
  }
  return obj;
}