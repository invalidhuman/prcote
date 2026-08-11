/**
 * 백준10845 큐
 * https://www.acmicpc.net/problem/10845
 *
 * @returns {number[]}
 */
function solution(commands) {
  // TODO: 풀이를 작성하세요.
  var answer = 0; // 서로 다른 나머지의 수

  // 메모해놓고 다를때마다 추가

  return answer;
}

const testCases = [
  {
    args: [
      [
        "push 1",
        "push 2",
        "front",
        "back",
        "size",
        "empty",
        "pop",
        "pop",
        "pop",
        "size",
        "empty",
        "pop",
        "push 3",
        "empty",
        "front",
      ],
    ],
    expected: [1, 2, 2, 0, 1, 2, -1, 0, 1, -1, 0, 3],
  },
];

if (require.main === module) {
  testCases.forEach(({ args, expected }, index) => {
    const actual = solution(...args);
    const passed = JSON.stringify(actual) === JSON.stringify(expected);
    console.log(`예제 ${index + 1}: ${passed ? "PASS" : "FAIL"}`);
    if (!passed) {
      console.log("  expected:", expected);
      console.log("  actual:  ", actual);
    }
  });
}

module.exports = solution;
