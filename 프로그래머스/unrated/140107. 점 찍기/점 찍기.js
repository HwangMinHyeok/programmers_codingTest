function solution(k, d) {
  // x = 0 ~ <=d
  // y = sqrt (d^2 + x^2)
  // y 이하의 k의 배수의 개수 +1 (0)
  let total = 0;
  for (let i = 0; i <= d; i += k) {
    let y = Math.sqrt(d * d - i * i);
    total += Math.floor(y / k) + 1;
  }
  return total;
}