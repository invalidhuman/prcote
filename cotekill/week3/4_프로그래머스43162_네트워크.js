/**
 * 프로그래머스43162 네트워크
 * https://school.programmers.co.kr/learn/courses/30/lessons/43162
 *
 * @param {number} n 컴퓨터의 개수
 * @param {number[][]} computers 컴퓨터 사이의 연결 정보
 * @returns {number} 네트워크의 개수
 */

function solution(n, computers) {
  var answer = 0;
  /* 
  n<=200 finally 
  */

  const visited = Array(n).fill(0);

  function dfs(i) {
    visited[i] = 1;
    console.log(visited);

    for (let j = 0; j < n; j++) {
      // 연결 & 방문X
      if (computers[i][j] === 1 && !visited[j]) {
        dfs(j);
      }

      // 자기자신
    }
  }

  /*
  [1, 1, 0], 
  [1, 1, 0], 
  [0, 0, 1]
  */
  //computers // 무방향
  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      answer++;
      dfs(i);
    }
  }

  return answer; // 개수
}

module.exports = solution;
