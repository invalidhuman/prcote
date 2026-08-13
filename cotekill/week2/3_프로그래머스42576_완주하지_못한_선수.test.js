const { format } = require("node:util");
const solution = require("./3_프로그래머스42576_완주하지_못한_선수");

const solutions = [
  { name: "풀이 1 (Object)", run: solution },
  { name: "풀이 2 (Map)", run: solution.solution2 },
];

const testCases = [
  {
    input: [["leo", "kiki", "eden"], ["eden", "kiki"]],
    expected: "leo",
  },
  {
    input: [
      ["marina", "josipa", "nikola", "vinko", "filipa"],
      ["josipa", "filipa", "marina", "nikola"],
    ],
    expected: "vinko",
  },
  {
    input: [
      ["mislav", "stanko", "mislav", "ana"],
      ["stanko", "ana", "mislav"],
    ],
    expected: "mislav",
  },
];

function runWithCapturedLogs(run, input) {
  const logs = [];
  const originalLog = console.log;
  console.log = (...values) => logs.push(format(...values));

  try {
    return { value: run(...structuredClone(input)), logs };
  } finally {
    console.log = originalLog;
  }
}

console.log("코드 실행");

for (const { name, run } of solutions) {
  console.log(`\n${name}`);

  testCases.forEach(({ input, expected }, index) => {
    let actual;
    let logs = [];
    let error;

    try {
      ({ value: actual, logs } = runWithCapturedLogs(run, input));
    } catch (caught) {
      error = caught;
    }

    const passed = error === undefined && actual === expected;

    console.log(`\n테스트 ${index + 1}`);
    console.log("  입력값:", JSON.stringify(input));
    console.log("  기대값:", JSON.stringify(expected));
    console.log("  반환값:", error ? `예외: ${error.message}` : JSON.stringify(actual));
    console.log("  출력값:");
    if (logs.length === 0) console.log("    (없음)");
    else logs.forEach((log) => console.log(`    ${log}`));
    console.log(`  실행 결과: ${passed ? "통과" : "실패"}`);

    if (!passed) process.exitCode = 1;
  });
}
