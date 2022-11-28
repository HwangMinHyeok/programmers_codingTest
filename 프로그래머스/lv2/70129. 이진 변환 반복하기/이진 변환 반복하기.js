function solution(s) {
  let stageCnt = 0;
  let deletedZeroCnt = 0;
  while (s !== "1") {
    const sArr = s.split("");
    const oneCnt = sArr.filter((el) => el === "1").length;
    deletedZeroCnt += s.length - oneCnt;
    s = oneCnt.toString(2);
    stageCnt++;
  }
  return [stageCnt, deletedZeroCnt];
}