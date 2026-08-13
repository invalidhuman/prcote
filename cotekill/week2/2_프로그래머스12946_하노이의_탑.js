/**
 * 프로그래머스12946 하노이의 탑
 * https://school.programmers.co.kr/learn/courses/30/lessons/12946
 *
 * @param {number} n 원판의 개수
 * @returns {number[][]} 원판을 옮기는 순서
 */
function solution(n) {
  // TODO: 풀이를 작성하세요.
  var answer = [];
  // 재귀 문제로, start 기둥에 n 개의 원판이 있을 때, 크기 순으로 1~n번째 원판이라고 부르도록 하자.
  // (1) 1~n-1번째 원판을 end 기둥이 아닌 나머지 기둥(경유지. by)으로 옮긴다.
  // (2) n번째 원판을 end 기둥으로 옮긴다.
  // (3), by에 있던 1~n-1번째 원판을 end 기둥으로 옮긴다.
  // 이 때, 1,3의 과정도 결국 반복이므로 재귀이다.

  // 결국 범용적으로 쓸 수 있는 함수를 만들어 n-1개, 1개, n-1 개를 옮기도록 해야함
  // num : 해당 회차에 옮겨야할 원판의 개수 (start로 지정한 기둥에 있는 원판 개수)
  // start : 해당 회차의 시작 기둥 (1번째 기둥이 아닐 수 있기 때문)
  // by : 해당 회차의 경유지 기둥
  // end : 해당 회차의 목적지 기둥
  function hanoi(num, start, by, end) {
    // 옮겨야할 원판의 수가 1이면 경유없이 바로 목적지로 옮기면 된다.
    if (num == 1) {
      answer.push([start, end]);
      return;
    }

    // (1) 1~n-1 번째 원판을 by(경유지)로 옮기기
    hanoi(num - 1, start, end, by);

    // (2) n 번째 원판을 바로 목적지에 갖다놓기
    answer.push([start, end]);

    // (3) 경유지(by)에 있던 1~n-1개의 원판을 목적지로 옮기기(n번째 원판의 위로)
    hanoi(num - 1, by, start, end);
  }

  // 1. 처음엔 일반적으로 진행한다.
  hanoi(n, 1, 2, 3);

  return answer;
}

const testCases = [
  {
    args: [2],
    expected: [
      [1, 2],
      [1, 3],
      [2, 3],
    ],
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
