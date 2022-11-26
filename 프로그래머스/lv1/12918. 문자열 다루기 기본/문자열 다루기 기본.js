function solution(s) {
  if (s.length !== 4 && s.length !== 6) return false;
  for (let i = 0; i < s.length; i++) {
    if (
      s[i].charCodeAt() < "0".charCodeAt() ||
      s[i].charCodeAt() > "9".charCodeAt()
    )
      return false;
  }
  return true;
}