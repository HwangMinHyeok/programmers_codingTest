function solution(arr) {
  const result = [];
  for (let k = 1; k <= arr.length; k++) {
    const kLenSumArr = getKLenSumArr(arr, k);
    result.push(...kLenSumArr);
  }
  const newResult = Array.from(new Set(result));
  return newResult.sort((a, b) => a - b).length;
}

function getKLenSumArr(arr, k) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = i; j < i + k; j++) {
      sum += arr[j % arr.length];
    }
    result.push(sum);
  }
  return Array.from(new Set(result));
}