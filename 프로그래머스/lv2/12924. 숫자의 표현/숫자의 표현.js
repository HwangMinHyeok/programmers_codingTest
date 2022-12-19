function getDivisors(n) {
    const result = [];
    const sqrt = Math.sqrt(n);
    for (let i = 1; i < sqrt; i++) {
        if (n % i === 0) result.push(i, n / i);
    }
    if (Number.isInteger(sqrt)) result.push(sqrt);
    return result.sort((a, b) => a - b);
}
function solution(n) {
    let cnt = 0;
    const divisors = getDivisors(n);
    // d개 x (n/d) = n
    divisors.forEach(d => {
        let eachSum = n / d;
        // d odd
        if (d % 2 === 1) {
            if (eachSum - Math.floor(d / 2) >= 1) cnt++;
        }
        // eachSum odd
        if (eachSum % 2 === 1) {
            if (Math.ceil(eachSum / 2 - d) >= 1) cnt++;
        }
    });
    return cnt;
}