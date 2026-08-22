/**
 * 프로그래머스87946 피로도
 * https://school.programmers.co.kr/learn/courses/30/lessons/87946
 *
 * @param {number} k 현재 피로도
 * @param {number[][]} dungeons [최소 필요 피로도, 소모 피로도] 목록
 * @returns {number} 탐험할 수 있는 최대 던전 수
 */
function solution(k, dungeons) {
  const visited = Array(dungeons.length).fill(false);
  let answer = 0;

  function explore(fatigue, count) {
    answer = Math.max(answer, count);

    for (let index = 0; index < dungeons.length; index += 1) {
      const [required, cost] = dungeons[index];
      if (visited[index] || fatigue < required) continue;

      visited[index] = true;
      explore(fatigue - cost, count + 1);
      visited[index] = false;
    }
  }

  explore(k, 0);
  return answer;
}

module.exports = solution;
