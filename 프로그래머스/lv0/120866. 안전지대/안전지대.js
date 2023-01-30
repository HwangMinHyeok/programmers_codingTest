function solution(board) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (board[i][j] === 1) {
        for (let u = -1; u <= 1; u++) {
          for (let d = -1; d <= 1; d++) {
            if (u === 0 && d === 0) continue;
            if (
              0 <= i + u &&
              i + u < board.length &&
              0 <= j + d &&
              j + d < board.length
            ) {
              if (board[i + u][j + d] === 0) board[i + u][j + d] = "x";
            }
          }
        }
      }
    }
  }
  return board.flat().filter((el) => el === 0).length;
}