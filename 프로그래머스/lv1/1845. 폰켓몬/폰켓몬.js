// nums의 중복 제거 가지수 vs nums.length/2
// [a,a,a,a] -> 1 vs 2 -> 1
// [a,a,b,b] -> 2 vs 2 -> 2
// [a,a,b,c] -> 3 vs 2 -> 2
// [a,b,c,d] -> 4 vs 2 -> 2
// nums.length는 항상 짝수 -> parseInt 필요 X
function solution(nums) {
  const set = new Set(nums);
  return nums.length / 2 >= set.size
    ? set.size
    : nums.length / 2;
}