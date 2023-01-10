function solution(n, left, right) {
    const arr = [];
    for (let idx = left; idx <= right; idx++) {
        let i = Math.floor(idx / n);
        let j = idx % n;
        arr.push(i > j ? i + 1 : j + 1);
    }
    return arr;
}