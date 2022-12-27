// function solution(people, limit) {
//     people.sort((a, b) => b - a);
//     let cnt = 0;
//     for (let i = 0; i < people.length; i++) {
//         if (people[i] + people.at(-1) <= limit) people.pop();
//         cnt++;
//     }
//     return cnt;
// }

function solution(people, limit) {
    people.sort((a, b) => b - a);
    let popped = 0;
    let cnt = 0;
    for (let i = 0; i < people.length - popped; i++) {
        if (people[i] + people.at(-1-popped) <= limit) popped++;
        cnt++;
    }
    return cnt;
}