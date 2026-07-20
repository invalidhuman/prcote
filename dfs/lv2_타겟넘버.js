// https://school.programmers.co.kr/learn/courses/30/lessons/43165
// lv2_타겟넘버.js
function solution(numbers, target) {
  let answer = 0;

  /*
    각 숫자마다 두 가지 선택지가 있다.
    1. 현재 숫자를 더한다.
    2. 현재 숫자를 뺀다.
  
    dfs를 재귀 호출하며 모든 경우의 수를 탐색한다.
  
    dfs의 매개변수
    - idx: 현재 부호를 결정할 숫자의 인덱스
    - sum: 이전 숫자들까지 계산한 누적 합
  
    모든 숫자를 처리한 후 sum이 target과 같으면
    가능한 방법을 하나 찾은 것이므로 answer를 증가시킨다.
    */

  function dfs(idx, sum) {
    // idx가 numbers.length라는 것은 모든 숫자를 처리했다는 뜻이다.
    // 마지막 인덱스인 numbers.length - 1에서는
    // 아직 마지막 숫자를 더하거나 빼지 않았으므로 검사하면 안 된다.
    if (idx === numbers.length) {
      if (sum === target) {
        answer++;
      }

      // 더 이상 탐색할 숫자가 없으므로 현재 재귀 호출을 종료한다.
      return;
    }

    // 현재 숫자를 더하는 경우
    dfs(idx + 1, sum + numbers[idx]);

    // 현재 숫자를 빼는 경우
    dfs(idx + 1, sum - numbers[idx]);
  }

  dfs(0, 0);

  return answer;
}
