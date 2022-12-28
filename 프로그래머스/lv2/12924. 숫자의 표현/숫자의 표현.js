function getDivisors(n) {
    const result = [];
    for (let i = 1; i < Math.sqrt(n); i++) {
        if (n % i === 0) result.push(i, n / i);
    }
    if (Number.isInteger(Math.sqrt(n))) result.push(Math.sqrt(n));
    return result.sort((a, b) => a - b);
}
function solution(n) {
    const divisors = getDivisors(n);
    return divisors.filter(d => d % 2 === 1).length;
}