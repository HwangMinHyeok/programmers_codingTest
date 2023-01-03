// 예) 후디 k가지
// 각 카테고리에서 1가지를 고르거나 고르지 않는 경우: kC1 +1
// kC1: k가지 중 1가지 고르기
// +1: 하나도 안 고르기

// 계산
// 각 요소에 대해 가지수를 구하고
// 싹 다 곱해서 -1
// -1 이유: 한 가지도 안 입었을 경우
function solution(clothes) {
  const closet = {};
  clothes.forEach((c) => (closet[c[1]] = (closet[c[1]] || 0) + 1));
  return Object.values(closet).reduce((acc, cur) => acc * (cur + 1), 1) - 1;
}