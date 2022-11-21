// n: arr.length
// get nCr by recursive method
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

function solution(number) {
  // get nC3 of numbers array
  const nC3s = getCombinations(number, 3);
  // 각 [n1, n2, n3]에서 if n1+n2+n3 === 0, cnt++
  let cnt = 0;
  for (let el of nC3s) {
    if (el.reduce((acc, cur) => acc + cur) === 0) {
      cnt++;
    }
  }
  // return cnt
  return cnt;
}