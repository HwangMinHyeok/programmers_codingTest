function solution(s) {
    const split = s.split(" ");
    return `${Math.min(...split)} ${Math.max(...split)}`
}