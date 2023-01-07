function solution(arr) {
  const answer = [0, 0];
  function quadTreeCompression(k, rIdx = 0, cIdx = 0) {
    // 압축 ㄱㄴ?
    function canBeCompressed(criteria, size, rowIdx, colIdx) {
      // 1x1이면 무조건 true
      if (size === 0) return true;
      for (let i = rowIdx; i < rowIdx + 2 ** size; i++) {
        for (let j = colIdx; j < colIdx + 2 ** size; j++) {
          if (arr[i][j] !== criteria) return false;
        }
      }
      return true;
    }
    // main
    const c = arr[rIdx][cIdx];
    if (canBeCompressed(c, k, rIdx, cIdx)) answer[c]++;
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
  const k = Math.log(arr.length) / Math.log(2); // n=2^k, k=log2(n)
  quadTreeCompression(k);
  return answer;
}