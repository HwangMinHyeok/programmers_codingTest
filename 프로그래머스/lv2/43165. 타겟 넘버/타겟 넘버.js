function solution(numbers, target) {
  let results = [0];
  for (const num of numbers) {
    const tmp = [];
    for (const parent of results) {
      tmp.push(parent + num, parent - num);
    }
    results = tmp;
  }
  return results.filter((el) => el === target).length;
}
