// 올바른 괄호 문자열?
function isValid(s) {
  const brackets = {
    ")": "(",
    "}": "{",
    "]": "[",
  };
  const stack = [];
  for (const b of s) {
    // if b is a close bracket
    if (Object.keys(brackets).includes(b)) {
      if (stack.length === 0) return false;
      if (stack.at(-1) !== brackets[b]) return false;
      stack.pop();
    } else stack.push(b);
  }
  return stack.length === 0 ? true : false;
}

// 회전 문자열: arr.push(arr.shift)
function solution(s) {
  const newS = s.split("");
  let result = 0;
  for (const b of newS) {
    if (isValid(newS)) result++;
    newS.push(newS.shift());
  }
  return result;
}
