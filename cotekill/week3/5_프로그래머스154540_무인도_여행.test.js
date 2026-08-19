const { format } = require("node:util");
const solution = require("./5_프로그래머스154540_무인도_여행");

const testCases = [
  {
    input: [["X591X", "X1X5X", "X231X", "1XXX1"]],
    expected: [1, 1, 27],
  },
  {
    input: [["XXX", "XXX", "XXX"]],
    expected: [-1],
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

  const passed =
    error === undefined && JSON.stringify(actual) === JSON.stringify(expected);

  console.log(`\n테스트 ${index + 1}`);
  console.log("  입력값:", JSON.stringify(input));
  console.log("  기대값:", JSON.stringify(expected));
  console.log(
    "  반환값:",
    error ? `예외: ${error.message}` : JSON.stringify(actual),
  );
  console.log("  출력값:");
  if (logs.length === 0) console.log("    (없음)");
  else logs.forEach((log) => console.log(`    ${log}`));
  console.log(`  실행 결과: ${passed ? "통과" : "실패"}`);

  if (!passed) process.exitCode = 1;
});
