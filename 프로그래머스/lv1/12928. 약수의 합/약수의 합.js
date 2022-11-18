function solution(n) {
  if (n === 0) return 0;
  var answer = 0;
  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      answer += i;
      if (i !== n / i) answer += n / i;
    }
  }
  return answer;
}