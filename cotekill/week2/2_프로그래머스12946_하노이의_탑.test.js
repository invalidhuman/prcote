const assert = require("node:assert/strict");
const solution = require("./2_프로그래머스12946_하노이의_탑");

const testCases = [
  {
    input: 2,
    expected: [
      [1, 2],
      [1, 3],
      [2, 3],
    ],
  },
];

console.log("코드 실행\n");

testCases.forEach(({ input, expected }, index) => {
  const actual = solution(input);

  try {
    assert.deepStrictEqual(actual, expected);
    console.log(`테스트 ${index + 1}: 통과`);
  } catch {
    console.log(`테스트 ${index + 1}: 실패`);
    console.log("  입력:", input);
    console.log("  기대값:", JSON.stringify(expected));
    console.log("  실행값:", JSON.stringify(actual));
    process.exitCode = 1;
  }
});
