// word of babbling
// letterIdx(: word 내 letter의 index)가 word.len 보다 작은 동안
// canPronounce의 el 중 일치하는 게 없다면, 다음 word로
// canPronounce의 el 중 일치하는 게 있다면,
//                                          formerIdx에 el의 index 저장
//                                          letterIdx += el.len
//                                          break
// word가 canPronounce의 조합으로 만들 수 있다면, result++
// return result
function solution(babbling) {
  const canPronounce = ["aya", "ye", "woo", "ma"];
  let result = 0;
  for (const word of babbling) {
    let letterIdx = 0;
    let formerCpIdx = -1;
    while (letterIdx < word.length) {
      let flag = false;
      for (let i = 0; i < canPronounce.length; i++) {
        if (i === formerCpIdx) continue;
        if (
          word.slice(letterIdx, letterIdx + canPronounce[i].length) ===
          canPronounce[i]
        ) {
          flag = true;
          formerCpIdx = i;
          letterIdx += canPronounce[i].length;
          break;
        }
      }
      if (!flag) break;
    }
    if (letterIdx === word.length) result++;
  }
  return result;
}