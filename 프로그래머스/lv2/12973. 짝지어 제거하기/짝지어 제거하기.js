function solution(s) {
    const result = [];
    if (s.length % 2 === 1) return 0;
    for (const letter of s) {
        if (result.length > 0 && result.at(-1) === letter) result.pop();
        else result.push(letter);
    }
    return result.length === 0 ? 1 : 0;
}