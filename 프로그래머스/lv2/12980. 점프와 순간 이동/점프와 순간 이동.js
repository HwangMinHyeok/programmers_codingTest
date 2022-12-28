function solution(n) {
    let battery = 0;
    while (n !== 1) {
        if (n % 2 === 1) {
            n--;
            battery++;
        } else {
            n /= 2;
        }
    }
    return battery + 1;
}