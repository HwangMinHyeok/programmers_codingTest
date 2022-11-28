function solution(food) {
  // 한쪽 세팅
  // 반대쪽 세팅
  // return: 한쪽 + 0 + 반대쪽
  let participant1 = [];
  for (let i = 1; i < food.length; i++) {
    participant1.push(String(i).repeat(parseInt(food[i] / 2)));
  }
  let participant2 = [...participant1].reverse();
  participant1.push("0");
  participant1.push(...participant2);
  return participant1.join("");
}