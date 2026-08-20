const solution = require("./6_프로그래머스120866_안전지대");

const hiddenCases = [
  [[0]],
  [[1]],
  [
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0],
  ],
  [
    [1, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ],
  [
    [1, 0, 1, 0, 1],
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0],
    [1, 0, 1, 0, 1],
  ],
  Array.from({ length: 100 }, () => Array(100).fill(0)),
  Array.from({ length: 100 }, () => Array(100).fill(1)),
  Array.from({ length: 100 }, (_, row) =>
    Array.from({ length: 100 }, (_, column) =>
      row % 10 === 0 && column % 10 === 0 ? 1 : 0,
    ),
  ),
];

function countSafeCells(board) {
  const size = board.length;
  const dangerous = new Set();

  for (let row = 0; row < size; row += 1) {
    for (let column = 0; column < size; column += 1) {
      if (board[row][column] !== 1) continue;

      for (let rowOffset = -1; rowOffset <= 1; rowOffset += 1) {
        for (
          let columnOffset = -1;
          columnOffset <= 1;
          columnOffset += 1
        ) {
          const nextRow = row + rowOffset;
          const nextColumn = column + columnOffset;

          if (
            nextRow >= 0 &&
            nextRow < size &&
            nextColumn >= 0 &&
            nextColumn < size
          ) {
            dangerous.add(nextRow * size + nextColumn);
          }
        }
      }
    }
  }

  return size * size - dangerous.size;
}

console.log("제출 및 채점하기");

let passedCount = 0;

hiddenCases.forEach((board, index) => {
  const expected = countSafeCells(board);
  const inputBoard = structuredClone(board);
  const startedAt = process.hrtime.bigint();
  let passed = false;

  try {
    const actual = solution(inputBoard);
    passed = actual === expected;
  } catch {
    passed = false;
  }

  const elapsed = Number(process.hrtime.bigint() - startedAt) / 1_000_000;
  if (passed) passedCount += 1;

  console.log(
    `테스트 ${String(index + 1).padStart(2, " ")}: ${passed ? "통과" : "실패"} (${elapsed.toFixed(2)}ms)`,
  );
});

console.log(`채점 결과: ${passedCount} / ${hiddenCases.length}`);

if (passedCount !== hiddenCases.length) process.exitCode = 1;
