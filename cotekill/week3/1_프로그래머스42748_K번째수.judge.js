const solution = require("./1_프로그래머스42748_K번째수");

const hiddenCases = [
  { array: [1], commands: [[1, 1, 1]] },
  { array: [10, 2], commands: [[1, 2, 1]] },
  { array: [10, 2], commands: [[1, 2, 2]] },
  { array: [100, 11, 9, 2, 1], commands: [[1, 5, 4]] },
  { array: [5, 5, 5, 5], commands: [[1, 4, 3]] },
  { array: [9, 8, 7, 6, 5], commands: [[2, 4, 2]] },
  {
    array: [20, 3, 100, 11, 2, 2, 99],
    commands: [
      [1, 7, 1],
      [1, 7, 7],
      [2, 6, 3],
      [4, 4, 1],
    ],
  },
  {
    array: Array.from({ length: 100 }, (_, index) => 100 - index),
    commands: [
      [1, 100, 1],
      [1, 100, 100],
      [25, 75, 26],
    ],
  },
];

function findKthNumber(array, [start, end, kth]) {
  const counts = Array(101).fill(0);

  for (let index = start - 1; index < end; index++) {
    counts[array[index]] += 1;
  }

  let remaining = kth;
  for (let number = 1; number <= 100; number++) {
    remaining -= counts[number];
    if (remaining <= 0) return number;
  }
}

console.log("제출 및 채점하기");

let passedCount = 0;

hiddenCases.forEach(({ array, commands }, index) => {
  const originalArray = [...array];
  const expected = commands.map((command) => findKthNumber(array, command));
  const inputArray = structuredClone(array);
  const inputCommands = structuredClone(commands);
  const startedAt = process.hrtime.bigint();
  let passed = false;

  try {
    const actual = solution(inputArray, inputCommands);
    passed =
      JSON.stringify(actual) === JSON.stringify(expected) &&
      JSON.stringify(inputArray) === JSON.stringify(originalArray);
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
