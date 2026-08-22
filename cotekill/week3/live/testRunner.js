const { format } = require("node:util");

function runWithCapturedLogs(solution, input) {
  const logs = [];
  const originalLog = console.log;
  console.log = (...values) => logs.push(format(...values));

  try {
    return { value: solution(...structuredClone(input)), logs };
  } finally {
    console.log = originalLog;
  }
}

function runPublicTests(solution, testCases) {
  console.log("코드 실행");

  testCases.forEach(({ input, expected }, index) => {
    let actual;
    let logs = [];
    let error;

    try {
      ({ value: actual, logs } = runWithCapturedLogs(solution, input));
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
}

function runJudge(testCases, verify) {
  console.log("제출 및 채점하기");

  let passedCount = 0;

  testCases.forEach((testCase, index) => {
    const startedAt = process.hrtime.bigint();
    let passed = false;

    try {
      passed = verify(structuredClone(testCase)) === true;
    } catch {
      passed = false;
    }

    const elapsed = Number(process.hrtime.bigint() - startedAt) / 1_000_000;
    if (passed) passedCount += 1;

    console.log(
      `테스트 ${String(index + 1).padStart(2, " ")}: ${passed ? "통과" : "실패"} (${elapsed.toFixed(2)}ms)`,
    );
  });

  console.log(`채점 결과: ${passedCount} / ${testCases.length}`);

  if (passedCount !== testCases.length) process.exitCode = 1;
}

module.exports = { runJudge, runPublicTests };
