function solution(s) {
  return Array.from(s)
    .sort((a, b) => b.charCodeAt() - a.charCodeAt())
    .join("");
}