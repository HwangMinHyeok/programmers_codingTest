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