function solution(today, terms, privacies) {
  // 약관별 유효기간 객체
  const termObj = {};
  terms.forEach((t) => {
    const [term, validity] = t.split(" ");
    termObj[term] = Number(validity);
  });

  // 날짜->숫자 변환
  const convertDateToNum = (date) => {
    const [y, m, d] = date.split(".");
    return Number(y) * 12 * 28 + Number(m) * 28 + Number(d);
  };
  const convertedToday = convertDateToNum(today);

  // 만료된 약관인가??
  const isExpiredTerm = (startDate, validity) => {
    return convertDateToNum(startDate) + validity * 28 - 1 < convertedToday;
  };

  // privacies의 p가 만료된 약관이라면 result.push(idx+1)
  const result = [];
  privacies.forEach((p, idx) => {
    const [startDate, term] = p.split(" ");
    if (isExpiredTerm(startDate, termObj[term])) result.push(idx + 1);
  });
  return result;
}