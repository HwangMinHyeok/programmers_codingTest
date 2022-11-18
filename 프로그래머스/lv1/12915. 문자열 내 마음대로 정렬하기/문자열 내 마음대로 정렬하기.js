function solution(strings, n) {
  // sort strings
  for (let i = 0; i < strings.length - 1; i++) {
    for (let j = i + 1; j < strings.length; j++) {
      // strings[i][n]이 strings[j][n]보다 크다면 swap
      if (strings[i][n] > strings[j][n]) {
        let tmp = strings[i];
        strings[i] = strings[j];
        strings[j] = tmp;
      }
      // strings[i][n]와 strings[j][n]가 같다면
      if (strings[i][n] === strings[j][n]) {
        // strings[i]가 strings[j]보다 사전 후순이라면 swap
        if (strings[i] > strings[j]) {
          let tmp = strings[i];
          strings[i] = strings[j];
          strings[j] = tmp;
        }
      }
    }
  }
  // return
  return strings;
}