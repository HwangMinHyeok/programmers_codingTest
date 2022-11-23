function solution(arr) {
  if (arr.length === 1) return [-1];
  let lowestIdx = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[lowestIdx]) {
      lowestIdx = i;
    }
  }
  arr.splice(lowestIdx, 1);
  return arr;
}