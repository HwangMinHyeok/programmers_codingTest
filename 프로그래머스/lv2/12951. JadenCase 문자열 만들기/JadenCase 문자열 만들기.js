function solution(s) {
  const str = s.toLowerCase();
  let result = "";
  for (const letter of str) {
    // 앞에가 undefined or " "
    // 현재가 알파벳이면
    if ((result.length === 0 || result.at(-1) === " ") && isNaN(letter))
      result += letter.toUpperCase();
    else result += letter;
  }
  return result;
}