const solution = require("./3_프로그래머스169199_리코쳇_로봇");
const { runJudge } = require("./testRunner");

const hiddenCases = [
  ["R.G", "DDD", "..."],
  ["RG.", "DDD", "..."],
  ["R..", "...", "..G"],
  ["R.D", "...", "G.D"],
  ["R.D..", ".....", "DDD.D", "G...."],
  ["R...D", ".D.D.", "..G..", ".D.D.", "D...."],
  ["R........G", "DDDDDDDDD.", ".........."],
  Array.from({ length: 100 }, (_, row) => {
    if (row === 0) return `R${".".repeat(98)}D`;
    if (row === 99) return `G${".".repeat(99)}`;
    return ".".repeat(100);
  }),
];

function stoppingPoints(board, row, column) {
  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  return directions.map(([rowOffset, columnOffset]) => {
    let nextRow = row;
    let nextColumn = column;

    while (true) {
      const movedRow = nextRow + rowOffset;
      const movedColumn = nextColumn + columnOffset;
      if (
        movedRow < 0 ||
        movedRow >= board.length ||
        movedColumn < 0 ||
        movedColumn >= board[0].length ||
        board[movedRow][movedColumn] === "D"
      ) {
        return [nextRow, nextColumn];
      }
      nextRow = movedRow;
      nextColumn = movedColumn;
    }
  });
}

function findMinimumMoves(board) {
  const width = board[0].length;
  const cells = [];
  let start;
  let goal;

  for (let row = 0; row < board.length; row += 1) {
    for (let column = 0; column < width; column += 1) {
      if (board[row][column] === "D") continue;
      const key = row * width + column;
      cells.push([row, column, key]);
      if (board[row][column] === "R") start = key;
      if (board[row][column] === "G") goal = key;
    }
  }

  const distances = Array(board.length * width).fill(Infinity);
  distances[start] = 0;

  for (let pass = 0; pass < cells.length - 1; pass += 1) {
    let changed = false;

    for (const [row, column, key] of cells) {
      if (!Number.isFinite(distances[key])) continue;

      for (const [nextRow, nextColumn] of stoppingPoints(board, row, column)) {
        const nextKey = nextRow * width + nextColumn;
        if (distances[nextKey] <= distances[key] + 1) continue;
        distances[nextKey] = distances[key] + 1;
        changed = true;
      }
    }

    if (!changed) break;
  }

  return Number.isFinite(distances[goal]) ? distances[goal] : -1;
}

runJudge(hiddenCases, (board) => {
  const original = [...board];
  const actual = solution(board);
  const expected = findMinimumMoves(original);

  return actual === expected && JSON.stringify(board) === JSON.stringify(original);
});
