// arr의 서로 다른 요소 r개씩 배열에 담고
// 그 배열들을 배열에 담아 2차원 배열을 반환
function getCombinations(arr, r) {
  const results = [];
  // if r===1, fixed와 각각 조합을 위해 return [[el], ...]
  if (r === 1) return arr.map((el) => [el]);

  arr.forEach((fixed, idx, origin) => {
    // fixed: origin[idx] // default
    // rest = arr - fixed
    const rest = origin.slice(idx + 1);
    // recursive: get combination of rest, r-1
    const combinations = getCombinations(rest, r - 1);
    // fixed와 재귀 리턴된 배열 합치기
    const attached = combinations.map((el) => [fixed, ...el]);
    // push to results
    results.push(...attached);
  });
  // return
  return results;
}

// 소수인가?
function isPrime(num) {
  if (num === 2) return true;
  if (num % 2 === 0) return false;
  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function solution(nums) {
  // nums에서 서로 다른 요소 3개씩 담은 배열들을 담은 2차원 배열: nC3s
  const nC3s = getCombinations(nums, 3);
  let cnt_sumIsPrime = 0;
  // 3개씩 담긴 각 배열에 대해
  nC3s.forEach((arr) => {
    // 그 합이 소수이면
    if (isPrime(arr.reduce((acc, cur) => acc + cur))) {
      // cnt++
      cnt_sumIsPrime++;
    }
  });
  return cnt_sumIsPrime;
}
