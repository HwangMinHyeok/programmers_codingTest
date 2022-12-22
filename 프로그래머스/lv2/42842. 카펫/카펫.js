function solution(brown, yellow) {
    const yellowH = getHeights(yellow);
    for (const yh of yellowH) {
        const yw = yellow / yh;
        if (brown + yellow === (yw + 2) * (yh + 2)) {
            return [yw + 2, yh + 2];
        }
    }
}
function getHeights(n) {
    const result = [];
    for (let i = 1; i <= Math.sqrt(n); i++) {
        if (n % i === 0) result.push(i);
    }
    return result;
}