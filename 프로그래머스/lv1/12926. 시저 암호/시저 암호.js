function solution(s, n) {
  const splitted = s.split("");
  const result = [];
  splitted.forEach((el) => {
    if (el === " ") result.push(el);
    else {
      let changedCode = el.charCodeAt() + n;
      if ("a" <= el && el <= "z") {
        if (changedCode >= "z".charCodeAt() + 1) changedCode -= 26;
      }
      if ("A" <= el && el <= "Z") {
        if (changedCode >= "Z".charCodeAt() + 1) changedCode -= 26;
      }
      el = String.fromCharCode(changedCode);
      result.push(el);
    }
  });
  return result.join("");
}