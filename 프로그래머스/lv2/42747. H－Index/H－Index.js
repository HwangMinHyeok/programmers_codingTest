function solution(citations) {
  citations.sort((a, b) => b - a);
  if (citations.at(-1) > citations.length) return citations.length;
  for (let h = 0; h < citations.length; h++) {
    if (citations[h] <= h) return h;
  }
}