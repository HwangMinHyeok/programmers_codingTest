function setCard(whArr) { // 가로가 길게 명함 정리
  if (whArr[0] >= whArr[1]) return whArr;
  return [whArr[1], whArr[0]];
}

function solution(sizes) {
  let wallet = setCard(sizes[0]);
  for (let i = 1; i < sizes.length; i++) {
    let card = setCard(sizes[i]);
    if (card[0] > wallet[0]) wallet[0] = card[0];
    if (card[1] > wallet[1]) wallet[1] = card[1];
  }
  return wallet[0] * wallet[1];
}