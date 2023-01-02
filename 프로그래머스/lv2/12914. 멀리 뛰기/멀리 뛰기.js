// 매 회 1 아님 2칸 -> 피보나치
// 배열 초기값: [1, 2]
// 1: n=1일 때, 1가지 방법 - 1
// 2: n=2일 때, 2가지 방법 - 1,1 / 2
// fib[i-1]: i칸 이동 방법 수
function solution(n) {
    const fib = [1, 2];
    const getFib = (n) => {
        if (fib[n] === undefined) fib[n] = getFib(n - 1) + getFib(n - 2);
        return fib[n] % 1234567;
    };
    return getFib(n-1);
}