function solution(n, lost, reserve) {
  lost.sort((a, b) => a - b);
  reserve.sort((a, b) => a - b);

  //! 1. lost와 reserve 겹치는 요소 제거
  for (let i = 0; i < lost.length; ) {
    if (reserve.includes(lost[i])) {
      reserve.splice(reserve.indexOf(lost[i]), 1);
      lost.splice(i, 1);
    } else i++;
  }
  //! 2. 체육복 여벌 주기
  let maxStudents = n - lost.length;
  for (let i = 0; i < reserve.length; i++) {
    // 앞에 줄 수 있음 주고, 뒤에 줄 수 있음 주고, 아니면 i++
    const prevStudent = reserve[i] - 1;
    if (lost.includes(prevStudent)) {
      lost.splice(lost.indexOf(prevStudent), 1);
      maxStudents++;
      continue;
    }
    const nextStudent = reserve[i] + 1;
    if (lost.includes(nextStudent)) {
      lost.splice(lost.indexOf(nextStudent), 1);
      maxStudents++;
      continue;
    }
  }
  return maxStudents;
}