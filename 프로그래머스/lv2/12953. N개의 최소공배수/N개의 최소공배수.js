// 1 소인수분해
// function solution(arr) {
//     // 입력 배열의 가장 큰 숫자 이하의 소수 배열 구하기
//     const primes = [];
//     for (let i = 2; i <= Math.max(...arr); i++) {
//         let isPrime = true;
//         for (let j = 2; j <= Math.sqrt(i); j++) {
//             if (i % j === 0) {
//                 isPrime = false;
//                 break;
//             }
//         }
//         if (isPrime) primes.push(i);
//     }
//     // 입력 배열의 각 숫자를 소인수분해 -> resultObj
//     const resultObj = {};
//     for (const el of arr) {
//         const primeFactorized = primeFactorization(el, primes);
//         for (const key in primeFactorized) {
//             if (resultObj[key] === undefined || resultObj[key] < primeFactorized[key]) resultObj[key] = primeFactorized[key];
//         }
//     }
//     // 최소공배수 구하기
//     let result = 1;
//     for (const prime in resultObj) {
//         result *= Math.pow(prime, resultObj[prime]);
//     }
//     return result;
// }
// // 소인수분해
// function primeFactorization(n, primes) {
//     const primeFactorized = {};
//     while (n !== 1) {
//         for (const prime of primes) {
//             if (prime > n) break;
//             if (n % prime === 0) {
//                 n /= prime;
//                 primeFactorized[prime] = (primeFactorized[prime] || 0) + 1;
//             }
//         }
//     }
//     return primeFactorized;
// }

// 2 GCD(유클리드 호제법)
function GCD(a, b) {
    const r = a % b;
    if (b % r === 0) return r;
    return a % b ? GCD(b, a % b) : b;
}
function LCM(a, b) {
    return (a * b) / GCD(a, b);
}
function solution(arr) {
    return arr.reduce((prev, cur) => LCM(prev, cur));
}