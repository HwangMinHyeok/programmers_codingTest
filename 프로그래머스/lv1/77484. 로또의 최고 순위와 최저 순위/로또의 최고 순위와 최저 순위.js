function solution(lottos, win_nums) {
    let match = 0; // 맞춘 개수
    let possible = 0; // lottos의 0 개수
    for (let i = 0; i < lottos.length; i++) {
        if (lottos[i] === 0) {
            possible++;
            continue;
        }
        if (win_nums.includes(lottos[i])) match++;
    }
    //
    if (match === 0) {
        if (possible === 0) return [6, 6];
        return [7 - (match + possible), 6];
    }
    return [7 - (match + possible), 7 - match];
}