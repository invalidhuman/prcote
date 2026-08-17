/**
 * 프로그래머스43165 타겟 넘버
 * https://school.programmers.co.kr/learn/courses/30/lessons/43165
 *
 * @param {number[]} numbers 사용할 자연수 배열
 * @param {number} target 만들려는 숫자
 * @returns {number} target을 만드는 방법의 수
 */
function solution(numbers, target) {
  let answer = 0;

  function dfs(idx, sum) {
    if (idx === numbers.length) {
      // 처음에 idx === numbers.length-1 로 해야하는 게 아닌가 헷갈렸는데,
      // dfs를 호출할 때 넘겨주는 인자 idx는 호출된 함수에서 처리할 숫자의 위치를 의미한다.
      // 혹은, 인덱스는 0부터 시작하므로 지금까지 처리한 숫자의 개수라고도 볼 수 있다.
      // 곧 인자 idx로 n-1이 들어오는 경우는 아직 배열의 모든 요소가 아닌 n-1개만 처리했다는 뜻이된다.
      // 인자 idx로 n이 들어와야(length) 모든 숫자를 정상적으로 처리한 상태가 된다.

      answer += target === sum ? 1 : 0;
      return;
    }

    dfs(idx + 1, sum + numbers[idx]);
    dfs(idx + 1, sum - numbers[idx]);
  }

  dfs(0, 0); // idx 0 부터, sum=0일때부터.

  return answer;
}

module.exports = solution;
