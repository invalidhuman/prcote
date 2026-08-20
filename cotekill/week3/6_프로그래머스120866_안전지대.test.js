const { format } = require("node:util");
const solution = require("./6_프로그래머스120866_안전지대");

const testCases = [
  {
    input: [
      [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 0, 0, 0],
      ],
    ],
    expected: 16,
  },
  {
    input: [
      [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 1, 1, 0],
        [0, 0, 0, 0, 0],
      ],
    ],
    expected: 13,
  },
  {
    input: [Array.from({ length: 6 }, () => Array(6).fill(1))],
    expected: 0,
  },
];

function runWithCapturedLogs(input) {
  const logs = [];
  const originalLog = console.log;
  console.log = (...values) => logs.push(format(...values));

  try {
    return { value: solution(...structuredClone(input)), logs };
  } finally {
    console.log = originalLog;
  }
}

console.log("코드 실행");

testCases.forEach(({ input, expected }, index) => {
  let actual;
  let logs = [];
  let error;

  try {
    ({ value: actual, logs } = runWithCapturedLogs(input));
  } catch (caught) {
    error = caught;
  }

  const passed = error === undefined && actual === expected;

  console.log(`\n테스트 ${index + 1}`);
  console.log("  입력값:", JSON.stringify(input));
  console.log("  기대값:", expected);
  console.log("  반환값:", error ? `예외: ${error.message}` : actual);
  console.log("  출력값:");
  if (logs.length === 0) console.log("    (없음)");
  else logs.forEach((log) => console.log(`    ${log}`));
  console.log(`  실행 결과: ${passed ? "통과" : "실패"}`);

  if (!passed) process.exitCode = 1;
});
