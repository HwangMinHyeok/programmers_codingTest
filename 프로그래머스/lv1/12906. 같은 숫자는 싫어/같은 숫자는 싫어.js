function solution(arr) {
  const resultArr = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1]) resultArr.push(arr[i]);
  }
  return resultArr;
}