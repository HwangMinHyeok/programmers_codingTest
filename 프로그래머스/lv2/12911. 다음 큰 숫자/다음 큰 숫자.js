function solution(n) {
    const oneCnt = getOneCntFromBinary(n);
    for (let i = n + 1; i <= 1000001; i++) {
        if (oneCnt === getOneCntFromBinary(i)) return i;
    }
}

function getOneCntFromBinary(n) {
    const bin = n.toString(2)
    return bin.match(/1/g).length;
}