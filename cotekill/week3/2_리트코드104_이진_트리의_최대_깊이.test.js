const { format } = require("node:util");
const solution = require("./2_리트코드104_이진_트리의_최대_깊이");

const testCases = [
  { input: [3, 9, 20, null, null, 15, 7], expected: 3 },
  { input: [1, null, 2], expected: 2 },
];

function buildTree(values) {
  if (values.length === 0) return null;

  const root = { val: values[0], left: null, right: null };
  const queue = [root];
  let valueIndex = 1;
  let nodeIndex = 0;

  while (valueIndex < values.length) {
    const node = queue[nodeIndex++];

    const leftValue = values[valueIndex++];
    if (leftValue !== null && leftValue !== undefined) {
      node.left = { val: leftValue, left: null, right: null };
      queue.push(node.left);
    }

    const rightValue = values[valueIndex++];
    if (rightValue !== null && rightValue !== undefined) {
      node.right = { val: rightValue, left: null, right: null };
      queue.push(node.right);
    }
  }

  return root;
}

function runWithCapturedLogs(values) {
  const logs = [];
  const originalLog = console.log;
  console.log = (...items) => logs.push(format(...items));

  try {
    return { value: solution(buildTree([...values])), logs };
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
