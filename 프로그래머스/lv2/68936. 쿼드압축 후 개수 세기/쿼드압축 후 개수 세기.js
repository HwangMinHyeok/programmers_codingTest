// 압축 ㄱㄴ?
function canBeCompressed(arr, criterion, size, rowIdx, colIdx) {
  // 1x1이면 무조건 true
  if (size === 0) return true;
  for (let i = rowIdx; i < rowIdx + 2 ** size; i++) {
    for (let j = colIdx; j < colIdx + 2 ** size; j++) {
      if (arr[i][j] !== criterion) return false;
    }
  }
  return true;
}

function solution(arr) {
  // 압축 ㄱㄴ -> 압축
  // else -> 재귀
  function quadTreeCompression(k, rIdx, cIdx) {
    const c = arr[rIdx][cIdx];
    if (canBeCompressed(arr, c, k, rIdx, cIdx)) answer[c]++;
    else {
      for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 2; j++) {
          const newRowIdx = rIdx + Math.pow(2, k - 1) * i;
          const newColIdx = cIdx + Math.pow(2, k - 1) * j;
          quadTreeCompression(k - 1, newRowIdx, newColIdx);
        }
      }
    }
  }
  const answer = [0, 0];
  const k = Math.log(arr.length) / Math.log(2); // n=2^k, k=log2(n)
  quadTreeCompression(k, 0, 0);
  return answer;
}
