// cantor_k: AABAA 형태 (k>=1)
// cantor_k의 길이: 5^k
// cantor_k의 1의 개수: 4^k

// 풀이
// n=2, l=4, r=17
// 인덱스 값으로 변경: newL = l-1 = 3, newR = r-1 = 16
// unitSize = 5^(2-1) = 5
// cantor_2 : cantor_1 | cantor_1 | zero_1 | cantor_1 | cantor_1
// idx      : 0 ~ 4    | 5 ~ 9    | 10 ~ 14| 15 ~ 19  | 20 ~ 24
//             newL(3) |    그 사이 unit들   | newR(16)
// cnt = 0
// cnt += newL이 포함된 unit 계산
//        : sol (n=n-1, l=newL%unit + 1, r=unit)
// cnt += newR이 포함된 unit 계산
//        : sol (n=n-1, l=1, r=newR%unit + 1)
// cnt += 그 사이 unit 계산
// return cnt

function solution(n, l, r) {
    if (n === 1) {
        const cantor_1 = "11011";
        return cantor_1.slice(l - 1, r).match(/1/g).length;
    }
    const newL = l - 1;
    const newR = r - 1;
    const unitSize = Math.pow(5, n - 1);
    let cnt = 0;
    // 1. newL,newR이 포함된 unit의 1개수 계산
    const unitofNewL = Math.floor(newL / unitSize);
    const unitofNewR = Math.floor(newR / unitSize);
    // unit 번호가 === 2: 5개 중 가운데 unit: 1의 개수 0개
    // newL과 newR이 같은 unit에 있을 때
    if (unitofNewL === unitofNewR) {
        cnt += solution(n - 1, newL % unitSize + 1, newR % unitSize + 1);
    }
    else {
        if (unitofNewL !== 2) {
            cnt += solution(n - 1, newL % unitSize + 1, unitSize);
        }
        if (unitofNewR !== 2) {
            cnt += solution(n - 1, 1, newR % unitSize + 1);
        }
    }
    // 2. 사이 unit들 1개수 계산
    for (let i = unitofNewL + 1; i < unitofNewR; i++) {
        if (i === 2) continue;
        cnt += Math.pow(4, n - 1); // c_n-1의 1의 개수: 4^(n-1)
    }
    return cnt;
}