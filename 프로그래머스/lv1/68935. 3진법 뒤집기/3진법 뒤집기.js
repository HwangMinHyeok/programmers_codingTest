function solution(n) {
    const threeBaseNum = n.toString(3);
    const reversed = threeBaseNum.split("").reverse().join("");
    return parseInt(reversed,3);
}