function solution(array, commands) {
  var answer = [];
  for (let el of commands) {
    // slice: i-1 <=  <= j-1
    let arr = array.slice(el[0] - 1, el[1]);
    // sort arr, ascending
    arr.sort((a, b) => a - b);
    // push arr[k-1] to answer[]
    answer.push(arr[el[2] - 1]);
  }
  return answer;
}