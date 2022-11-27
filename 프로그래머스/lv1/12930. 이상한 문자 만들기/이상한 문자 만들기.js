function solution(s) {
  // s: >= 1 word
  // word: >= 1 empty space
  // word - 짝수번째 alphabet: toUpperCase
  // word - 홀수번째 alphabet: toLowerCase
  const words = s.split(" ");
  const result = words.map((el) => {
    const word = el.split("");
    const changedWord = word.map((alphabet, idx) => {
      if (idx % 2 === 0) return alphabet.toUpperCase();
      return alphabet.toLowerCase();
    });
    return changedWord.join("");
  });
  return result.join(" ");
}