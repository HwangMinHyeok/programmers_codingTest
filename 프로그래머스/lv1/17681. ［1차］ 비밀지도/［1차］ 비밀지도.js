function solution(n, arr1, arr2) {
  const result = [];
  for (let i = 0; i < n; i++) {
    const resultRow = arr1[i] | arr2[i];
    result.push(
      resultRow
        .toString(2)
        .padStart(n, "0")
        .replaceAll("0", " ")
        .replaceAll("1", "#")
    );
  }
  return result;
}