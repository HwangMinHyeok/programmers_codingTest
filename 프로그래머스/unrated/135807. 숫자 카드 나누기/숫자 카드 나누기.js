// Math.min보다 성능 좋음?!
function getMin(arr) {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (min > arr[i]) min = arr[i];
    }
    return min;
  }
  
function getA(arr1, arr2) {
    // arr1의 공약수들 중
    // arr2 하나도 못 나누는 값
    // 중 가장 큰 값 return
    // if not exists, return 0
    const min = getMin(arr1);
    for (let i = min; i >= 2; i--) {
      if (arr1.every((el) => el % i === 0)) {
        if (arr2.every((el) => el % i !== 0)) {
          return i;
        }
      }
    }
    return 0;
  }
  
  function solution(arrA, arrB) {
    const a1 = getA(arrA, arrB);
    const a2 = getA(arrB, arrA);
    return a1 > a2 ? a1 : a2;
  }