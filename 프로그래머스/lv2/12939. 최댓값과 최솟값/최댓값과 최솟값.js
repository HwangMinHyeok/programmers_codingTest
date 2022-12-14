function solution(s) {
    const split = s.split(" ");
    const result = [Math.min(...split), Math.max(...split)];
    return result.join(" ");
}