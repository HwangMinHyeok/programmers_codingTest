// number: 기사수 (= 배열 길이)
// number의 el의 약수의 개수: 공격력
// if 각 el의 공격력 <= limit -> result += 해당 공격력
// else                     -> result += power

function solution(number, limit, power) {
  let result = 0;
  for (let i = 0; i < number; i++) {
    let ironAmount = getDivisorsCnt(i + 1);
    if (ironAmount <= limit) result += ironAmount;
    else result += power;
  }
  return result;
}

function getDivisorsCnt(n) {
  let cnt = 0;
  for (let i = 1; i < Math.sqrt(n); i++) {
    if (n % i === 0) cnt += 2;
  }
  if (Number.isInteger(Math.sqrt(n))) cnt++;
  return cnt;
}