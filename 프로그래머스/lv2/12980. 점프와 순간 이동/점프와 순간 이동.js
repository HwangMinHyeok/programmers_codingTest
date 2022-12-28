// 1트: 그냥
// function solution(n) {
//     let battery = 0;
//     while (n !== 1) {
//         if (n % 2 === 1) {
//             n--;
//             battery++;
//         } else {
//             n /= 2;
//         }
//     }
//     return battery + 1;
// }

// 2트: 1트가 2점인가 3점 떠서 더 좋은게 있구나하고 생각하다보니깐
// 1의 작업이 결국은 n을 이진수로 바꿨을 때 1의 개수 구하는 것과 같다는 걸 알게 됨
function solution(n) {
    return n.toString(2).match(/1/g).length;
}