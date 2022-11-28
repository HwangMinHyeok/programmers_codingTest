function solution(dartResult) {
  //! 1. 구분자 "-"로 분리
  let splitted = dartResult.split("");
  for (let i = 0; i < splitted.length; i++) {
    switch (splitted[i]) {
      case "S":
      case "D":
      case "T":
      case "*":
      case "#":
        if (!isNaN(splitted[i + 1])) {
          splitted.splice(i + 1, 0, "-");
          i += 2;
        }
        break;
      default:
        break;
    }
  }
  splitted = splitted.join("").split("-");

  //! 2. 계산
  const expObj = {
    S: 1,
    D: 2,
    T: 3,
  };
  let val = 0; // 각 회차별 점수
  const result = []; // 각 회차별 점수 배열
  splitted.forEach((el, idx) => {
    // set val
    if (el[1] === "0") {
      // num: 10
      val = Math.pow(10, expObj[el[2]]);
    } else {
      // num: 0~9
      val = Math.pow(Number(el[0]), expObj[el[1]]);
    }
    // option handling
    if (el[el.length - 1] === "*") {
      if (result.length != 0) {
        result[idx - 1] *= 2;
      }
      result.push(val * 2);
    } else if (el[el.length - 1] === "#") {
      result.push(-val);
    } else {
      result.push(val);
    }
  });
  return result.reduce((acc, cur) => acc + cur);
}