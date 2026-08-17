const solution = require("./3_프로그래머스43165_타겟_넘버");

const hiddenCases = [
  { numbers: [1, 1], target: 2 },
  { numbers: [1, 1], target: 1 },
  { numbers: [50, 50], target: 100 },
  { numbers: [50, 50], target: 1 },
  { numbers: [2, 2, 2, 2, 2, 2], target: 4 },
  { numbers: [1, 2, 3, 4, 5, 6, 7, 8], target: 10 },
  { numbers: Array(20).fill(1), target: 10 },
  { numbers: Array(20).fill(50), target: 1_000 },
  {
    numbers: [3, 7, 11, 2, 5, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 1, 4, 8, 16, 32],
    target: 100,
  },
];

function countWays(numbers, target) {
  let counts = new Map([[0, 1]]);

  for (const number of numbers) {
    const nextCounts = new Map();

    for (const [sum, count] of counts) {
      nextCounts.set(sum + number, (nextCounts.get(sum + number) ?? 0) + count);
      nextCounts.set(sum - number, (nextCounts.get(sum - number) ?? 0) + count);
    }

    counts = nextCounts;
  }

  return counts.get(target) ?? 0;
}

console.log("제출 및 채점하기");

let passedCount = 0;

hiddenCases.forEach(({ numbers, target }, index) => {
  const expected = countWays(numbers, target);
  const inputNumbers = [...numbers];
  const originalNumbers = [...numbers];
  const startedAt = process.hrtime.bigint();
  let passed = false;

  try {
    const actual = solution(inputNumbers, target);
    passed =
      actual === expected &&
      JSON.stringify(inputNumbers) === JSON.stringify(originalNumbers);
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
