function solution(n) {
    const bin = n.toString(2);
    const oneCnt = bin.match(/1/g).length;
    const lastOneIdx = bin.lastIndexOf('1');
    const adder = Math.pow(2, (bin.length - 1) - lastOneIdx);
    const added = n + adder;
    const added_oneCnt = added.toString(2).match(/1/g).length;
    const oneCntDif = oneCnt - added_oneCnt;
    if (oneCntDif === 0) return added;
    return added + (Math.pow(2, oneCntDif) - 1);
}