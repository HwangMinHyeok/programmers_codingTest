function solution(str1, str2) {
  const obj1 = getMultiset(str1);
  const obj2 = getMultiset(str2);
  // if 둘 다 공집합; 분모(합집합의 개수):0 -> 자카드 유사도 1로 취급
  if (Object.keys(obj1).length === 0 && Object.keys(obj2).length === 0) return 65536;
  return Math.floor(getJaccardSimilarity(obj1, obj2) * 65536);
}

// 자카드 유사도
function getJaccardSimilarity(obj1, obj2) {
  let iCnt = 0;
  let uCnt = 0;
  const keys = new Set(Object.keys(obj1).concat(Object.keys(obj2)));
  keys.forEach((key) => {
    if (obj1[key] === undefined) uCnt += obj2[key];
    else if (obj2[key] === undefined) uCnt += obj1[key];
    else {
      uCnt += Math.max(obj1[key], obj2[key]);
      iCnt += Math.min(obj1[key], obj2[key]);
    }
  });
  return iCnt / uCnt;
}

// 2글자 단위 다중 집합
function getMultiset(str) {
  const multiset = {};
  const s = str.toUpperCase();
  for (let i = 0; i < s.length - 1; i++) {
    if (/[A-Z]/.test(s[i])) {
      if (/[A-Z]/.test(s[i + 1])) {
        const key = s[i] + s[i + 1];
        multiset[key] = (multiset[key] || 0) + 1;
      } else i++;
    }
  }
  return multiset;
}
