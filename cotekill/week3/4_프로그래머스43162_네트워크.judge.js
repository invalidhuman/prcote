const solution = require("./4_프로그래머스43162_네트워크");

function createMatrix(n, edges = []) {
  const computers = Array.from({ length: n }, (_, row) =>
    Array.from({ length: n }, (_, column) => (row === column ? 1 : 0)),
  );

  for (const [from, to] of edges) {
    computers[from][to] = 1;
    computers[to][from] = 1;
  }

  return computers;
}

const hiddenCases = [
  { n: 1, computers: [[1]] },
  { n: 5, computers: createMatrix(5) },
  {
    n: 5,
    computers: createMatrix(5, [
      [0, 1],
      [0, 2],
      [0, 3],
      [0, 4],
    ]),
  },
  {
    n: 6,
    computers: createMatrix(6, [
      [0, 1],
      [1, 2],
      [3, 4],
    ]),
  },
  {
    n: 8,
    computers: createMatrix(8, [
      [0, 1],
      [1, 2],
      [2, 3],
      [4, 5],
      [5, 6],
      [6, 7],
    ]),
  },
  {
    n: 200,
    computers: createMatrix(
      200,
      Array.from({ length: 199 }, (_, index) => [index, index + 1]),
    ),
  },
  { n: 200, computers: createMatrix(200) },
];

function countNetworks(n, computers) {
  const parent = Array.from({ length: n }, (_, index) => index);

  function find(node) {
    while (node !== parent[node]) {
      parent[node] = parent[parent[node]];
      node = parent[node];
    }
    return node;
  }

  function union(left, right) {
    const leftRoot = find(left);
    const rightRoot = find(right);
    if (leftRoot !== rightRoot) parent[rightRoot] = leftRoot;
  }

  for (let row = 0; row < n; row += 1) {
    for (let column = row + 1; column < n; column += 1) {
      if (computers[row][column] === 1) union(row, column);
    }
  }

  return new Set(parent.map((_, index) => find(index))).size;
}

console.log("제출 및 채점하기");

let passedCount = 0;

hiddenCases.forEach(({ n, computers }, index) => {
  const expected = countNetworks(n, computers);
  const inputComputers = structuredClone(computers);
  const originalComputers = structuredClone(computers);
  const startedAt = process.hrtime.bigint();
  let passed = false;

  try {
    const actual = solution(n, inputComputers);
    passed =
      actual === expected &&
      JSON.stringify(inputComputers) === JSON.stringify(originalComputers);
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
