function solution(price, money, count) {
  const requiredAmount = ((count * (count + 1)) / 2) * price;
  return requiredAmount >= money ? requiredAmount - money : 0;
}