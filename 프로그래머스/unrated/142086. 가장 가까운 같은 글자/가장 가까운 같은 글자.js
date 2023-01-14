function solution(s) {
    const idxMap = new Map();
    const result = [];
    s.split("").forEach((el, idx) => {
        result.push(idx - idxMap.get(el) || -1);
        idxMap.set(el, idx)
    });
    return result;
}