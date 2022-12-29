// 1 slice.includes
// function solution(n, words) {
//     for (let i = 1; i < words.length; i++) {
//         if (words[i - 1].at(-1) !== words[i].at(0) || words.slice(0, i).includes(words[i])) {
//             return [i % n + 1, Math.floor(i / n) + 1];
//         }
//     }
//     return [0, 0];
// }

// 2 객체 활용
function solution(n, words) {
    const idxObj = {};
    words.forEach((word, idx) => idxObj[word] !== undefined ? idxObj[word].push(idx) : idxObj[word] = [idx]);
    for (let i = 1; i < words.length; i++) {
        if (words[i - 1].at(-1) !== words[i].at(0) || i === idxObj[words[i]].at(1)) {
            return [i % n + 1, Math.floor(i / n) + 1];
        }
    }
    return [0, 0];
}