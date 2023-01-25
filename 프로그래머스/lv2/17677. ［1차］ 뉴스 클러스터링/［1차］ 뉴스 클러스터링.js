function solution(str1, str2) {
  const multiset1 = getMultiset(str1);
  const multiset2 = getMultiset(str2);
  const jaccard = getJaccardSimilarity(multiset1, multiset2);
  return Math.floor(jaccard * 65536);
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

// 자카드 유사도
function getJaccardSimilarity(multiset1, multiset2) {
  // if 둘 다 공집합; 분모(합집합의 개수):0 -> 자카드 유사도 1로 취급
  if (Object.keys(multiset1).length === 0 && Object.keys(multiset2).length === 0) return 1;
  let iCnt = 0; // intersection Count
  let uCnt = 0; // union Count
  const keys = new Set([...Object.keys(multiset1), ...Object.keys(multiset2)]);
  keys.forEach((key) => {
    if (multiset1[key] === undefined) uCnt += multiset2[key];
    else if (multiset2[key] === undefined) uCnt += multiset1[key];
    else {
      uCnt += Math.max(multiset1[key], multiset2[key]);
      iCnt += Math.min(multiset1[key], multiset2[key]);
    }
  });
  return iCnt / uCnt;
}