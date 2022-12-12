function solution(numbers) {
  // nC2 -> 더해서 -> 중복 빼고 배열에 넣기
  var answer = [];
  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      let sum = numbers[i] + numbers[j];
      if (!answer.includes(sum)) 
          answer.push(sum);
    }
  }
  // sort and return
  answer.sort((a, b) => a - b);
  return answer;
}