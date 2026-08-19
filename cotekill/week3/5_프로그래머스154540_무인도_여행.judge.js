const solution = require("./5_프로그래머스154540_무인도_여행");

const hiddenCases = [
  ["XXX", "XXX", "XXX"],
  ["111", "111", "111"],
  ["1X1", "X1X", "1X1"],
  ["12X", "X3X", "X45"],
  ["9X1X2", "9X1X2", "XXX99", "3X4X9", "3X4X9"],
  Array(100).fill("9".repeat(100)),
  Array.from({ length: 100 }, (_, row) =>
    Array.from({ length: 100 }, (_, column) =>
      (row + column) % 2 === 0 ? "1" : "X",
    ).join(""),
  ),
];

function getIslandSums(maps) {
  const rows = maps.length;
  const columns = maps[0].length;
  const cellCount = rows * columns;
  const parent = Array.from({ length: cellCount }, (_, index) => index);

  function find(cell) {
    while (cell !== parent[cell]) {
      parent[cell] = parent[parent[cell]];
      cell = parent[cell];
    }
    return cell;
  }

  function union(left, right) {
    const leftRoot = find(left);
    const rightRoot = find(right);
    if (leftRoot !== rightRoot) parent[rightRoot] = leftRoot;
  }

  for (let row = 0; row < rows; row += 1) {
    for (let column = 0; column < columns; column += 1) {
      if (maps[row][column] === "X") continue;

      const cell = row * columns + column;
      if (row > 0 && maps[row - 1][column] !== "X") {
        union(cell, cell - columns);
      }
      if (column > 0 && maps[row][column - 1] !== "X") {
        union(cell, cell - 1);
      }
    }
  }

  const sums = new Map();

  for (let row = 0; row < rows; row += 1) {
    for (let column = 0; column < columns; column += 1) {
      if (maps[row][column] === "X") continue;

      const root = find(row * columns + column);
      sums.set(root, (sums.get(root) ?? 0) + Number(maps[row][column]));
    }
  }

  if (sums.size === 0) return [-1];
  return [...sums.values()].sort((left, right) => left - right);
}

console.log("제출 및 채점하기");

let passedCount = 0;

hiddenCases.forEach((maps, index) => {
  const expected = getIslandSums(maps);
  const inputMaps = [...maps];
  const originalMaps = [...maps];
  const startedAt = process.hrtime.bigint();
  let passed = false;

  try {
    const actual = solution(inputMaps);
    passed =
      JSON.stringify(actual) === JSON.stringify(expected) &&
      JSON.stringify(inputMaps) === JSON.stringify(originalMaps);
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
