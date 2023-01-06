// 돌릴 개수: t.length - pLen + 1
// 각각 슬라이스 pLen씩
function solution(t, p) {
    const pLen = p.length;
    const pNum = Number(p);
    const forLen = t.length - pLen + 1;
    let cnt = 0;
    for (let i = 0; i < forLen; i++) {
        const num = Number(t.slice(i, i + pLen));
        if (num <= pNum) cnt++;
    }
    return cnt;
}