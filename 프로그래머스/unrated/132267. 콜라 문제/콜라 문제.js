// a병 갖다주고 b병을 받는다
// stage    total
// 0        n
// 1        n - (n/a)*a + (n/a)*b
function solution(a, b, n) {
  let totalBottles = n;
  let sumTakeBottles = 0;
  while (totalBottles >= a) {
    let changeRate = parseInt(totalBottles / a);
    sumTakeBottles += changeRate * b;
    totalBottles = totalBottles - changeRate * a + changeRate * b;
  }
  return sumTakeBottles;
}