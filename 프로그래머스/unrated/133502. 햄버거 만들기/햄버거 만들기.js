// // 1
// // 너무 어렵게 생각한 듯
// function solution(ingredient) {
//     // 아래부터, 1 빵 - 2 야채 - 3 고기 - 1 빵
//     // if 버거 -> splice, bugerCnt++, i = stack.pop() || 0
//     // else -> 빵 index를 stack에 저장하고 i++
//     const burger = [1, 2, 3, 1];
//     let burgerCnt = 0;
//     let breadIdxStack = [];
//     for (let i = 0; i <= ingredient.length - 4;) {
//         if (burger.every((el, idx) => el === ingredient[i + idx])) {
//             ingredient.splice(i, 4);
//             burgerCnt++;
//             i = breadIdxStack.pop() || 0;
//             continue;
//         } else {
//             if (ingredient[i] === 1) breadIdxStack.push(i);
//             i++;
//         }
//     }
//     return burgerCnt;
// }

// 2
// stack에 push하면서 check
function solution(ingredients) {
  const burger = [1, 2, 3, 1];
  let burgerCnt = 0;
  const ingStack = [];
  for (const ingredient of ingredients) {
    ingStack.push(ingredient);
    if (ingStack.length >= burger.length) {
      if (
        ingStack.slice(-burger.length).every((el, idx) => el === burger[idx])
      ) {
        burgerCnt++;
        for (let i = 0; i < burger.length; i++) ingStack.pop();
      }
    }
  }
  return burgerCnt;
}
