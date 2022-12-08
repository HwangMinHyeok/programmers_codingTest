function solution(s) {
  const obj = {};
  const result = [];
  s = s.split("");
  for (let i = 0; i < s.length; i++) {
    result.push(obj[s[i]] === undefined ? -1 : i - obj[s[i]]);
    obj[s[i]] = i;
  }
  return result;
}