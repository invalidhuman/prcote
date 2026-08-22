/**
 * 프로그래머스169199 리코쳇 로봇
 * https://school.programmers.co.kr/learn/courses/30/lessons/169199
 *
 * @param {string[]} board 게임판
 * @returns {number} 목표에 도달하는 최소 이동 횟수 또는 -1
 */
function solution(board) {
  const rowCount = board.length;
  const columnCount = board[0].length;
  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];
  let start;

  for (let row = 0; row < rowCount; row += 1) {
    const column = board[row].indexOf("R");
    if (column !== -1) {
      start = [row, column];
      break;
    }
  }

  const visited = Array.from({ length: rowCount }, () =>
    Array(columnCount).fill(false),
  );
  const queue = [[start[0], start[1], 0]];
  visited[start[0]][start[1]] = true;

  for (let head = 0; head < queue.length; head += 1) {
    const [row, column, moves] = queue[head];
    if (board[row][column] === "G") return moves;

    for (const [rowOffset, columnOffset] of directions) {
      let nextRow = row;
      let nextColumn = column;

      while (true) {
        const movedRow = nextRow + rowOffset;
        const movedColumn = nextColumn + columnOffset;
        const isOutside =
          movedRow < 0 ||
          movedRow >= rowCount ||
          movedColumn < 0 ||
          movedColumn >= columnCount;

        if (isOutside || board[movedRow][movedColumn] === "D") break;
        nextRow = movedRow;
        nextColumn = movedColumn;
      }

      if (visited[nextRow][nextColumn]) continue;
      visited[nextRow][nextColumn] = true;
      queue.push([nextRow, nextColumn, moves + 1]);
    }
  }

  return -1;
}

module.exports = solution;
