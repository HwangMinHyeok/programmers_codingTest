function solution(X, Y) {
  const xObj = getNumObj(X);
  const yObj = getNumObj(Y);
  let result = "";
  for (let i = 0; i <= 9; i++) {
    if (xObj[i] && yObj[i]) {
      let lesser = xObj[i] > yObj[i] ? yObj[i] : xObj[i];
      result += String(i).repeat(lesser);
    }
  }
  if (result.length === 0) return "-1";
  result = result.split("").reverse();
  if (result[0] === "0" && result[result.length - 1] === "0") return "0";
  return result.join("");
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