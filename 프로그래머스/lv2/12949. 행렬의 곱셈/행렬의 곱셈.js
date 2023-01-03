function getRow(arr, arrNum) {
  return arr[arrNum];
}

function getCol(arr, colNum) {
  return arr.map(row => row[colNum]);
}

// 두 배열의 각 요소의 곱의 합
function sumproduct(arr1, arr2) {
  // 두 배열의 길이가 같아야 함
  return arr1.reduce((acc, arr1idx, idx) => acc + arr1idx * arr2[idx], 0);
}

// result[i][j] = sumproduct(arr1의 i행, arr2의 j열)
function solution(arr1, arr2) {
  const row = arr1.length;
  const col = arr2[0].length;
  
  const result = [];
  for (let i = 0; i < row; i++) {
    const newRow = [];
    for (let j = 0; j < col; j++) {
      const val = sumproduct(getRow(arr1, i), getCol(arr2, j));
      newRow.push(val);
    }
    result.push(newRow);
  }
  return result;
}