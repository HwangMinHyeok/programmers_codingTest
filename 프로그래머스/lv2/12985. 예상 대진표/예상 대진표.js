function solution(n, a, b) {
    for (let round = 1; n !== 1; round++) {
        a = Math.ceil(a / 2);
        b = Math.ceil(b / 2);
        if (a === b) return round;
        n /= 2;
    }
}