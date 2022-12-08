function solution(survey, choices) {
  // [[R,T], [C,F], [J,M], [A,N]]
  // question of survey
  //    [type, score] = getResult()
  //    update typeObj
  // 
  // types of typeList
  //    if same, 앞놈
  //    else, 큰놈

  // set default
  const typeList = [
    ["R", "T"],
    ["C", "F"],
    ["J", "M"],
    ["A", "N"],
  ];
  const typeObj = {};
  typeList.forEach((types) => {
    types.forEach((type) => {
      typeObj[type] = 0;
    });
  });
  // update typeObj
  survey.forEach((question, idx) => {
    const [type, score] = getResult(question, choices[idx]);
    typeObj[type] += score;
  });
  // update result
  let result = "";
  for (const types of typeList) {
    if (typeObj[types[0]] === typeObj[types[1]]) result += types[0];
    else {
      result += typeObj[types[0]] > typeObj[types[1]] ? types[0] : types[1];
    }
  }
  // return
  return result;
}

// a b choice   choice-4
// 3    1       -3
// 2    2       -2
// 1    3       -1
// 0 0  4       0
//   1  5       1
//   2  6       2
//   3  7       3

function getResult(question, choice) {
  const [type1, type2] = question.split("");
  const idx = choice - 4;
  if (idx < 0) return [type1, Math.abs(idx)];
  return [type2, idx];
}
