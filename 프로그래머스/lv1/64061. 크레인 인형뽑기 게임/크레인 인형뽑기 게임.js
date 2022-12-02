function solution(board, moves) {
  // board 열 기준 역순 2차원 배열 stacks
  const stacks = [];
  const N = board.length;
  for (let col = 0; col < N; col++) {
    const stack = [];
    for (let row = N - 1; row >= 0; row--) {
      if (board[row][col] === 0) break;
      stack.push(board[row][col]);
    }
    stacks.push(stack);
  }

  // moves 순회하며 stacks의 stack에서 pop
  // if not undefined, push or pop, calculate poppedDolls
  const dollStack = [];
  let poppedDolls = 0;
  for (let move of moves) {
    const poppedDoll = stacks[move - 1].pop();
    if (poppedDoll !== undefined) {
      if (poppedDoll === dollStack[dollStack.length - 1]) {
        dollStack.pop();
        poppedDolls += 2;
      } else {
        dollStack.push(poppedDoll);
      }
    }
  }
  return poppedDolls;
}