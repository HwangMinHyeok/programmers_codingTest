function solution(a, b) {
  const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const daysOfMonth = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const Jan1stIdx = 5;
  let cal = 0;
  // a월 b일
  // 1월 ~ a-1월 daysOfMonth sum + b - 1 (Jan1st)
  if (a === 1) {
    cal = b - 1;
  } else {
    cal = daysOfMonth.slice(0, a - 1).reduce((acc, cur) => acc + cur) + b - 1;
  }
  return days[(Jan1stIdx + cal) % 7];
}