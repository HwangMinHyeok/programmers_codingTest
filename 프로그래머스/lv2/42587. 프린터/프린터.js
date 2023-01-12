// prorities.shift()가 최대값일 때
//      타겟이면 return printed.length
//      타겟아니면 location--
// prorities.shift()가 최대값이 아닐 때
//      타겟이면 리턴 location = priorities.length - 1 (맨 뒤로 보냄)
//      타겟아니면 location--
function solution(priorities, location) {
  const printed = [];
  while (true) {
    const p = priorities.shift();
    if (p >= Math.max(...priorities)) {
      printed.push(p);
      if (location === 0) return printed.length;
      location--;
    } else {
      priorities.push(p);
      if (location === 0) location = priorities.length - 1;
      else location--;
    }
  }
}