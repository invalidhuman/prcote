/**
 * 프로그래머스12915 문자열 내 마음대로 정렬하기
 * https://school.programmers.co.kr/learn/courses/30/lessons/12915
 *
 * @param {string[]} strings 정렬할 문자열 배열
 * @param {number} n 정렬 기준 문자의 인덱스
 * @returns {string[]} 문제의 기준에 따라 정렬한 문자열 배열
 */
function solution(strings, n) {
  var answer = [];

  answer = strings.sort((a, b) => {
    // 음수면 오름차순, // 양수면 내림차순
    if (a[n] < b[n]) return -1;

    if (a[n] > b[n]) return 1;

    // n 번째 문자가 둘이 같으면 그냥 문자열 자체를 사전 순 비교

    if (a < b) return -1;
    if (a > b) return 1;

    return 0;
  });

  return answer;
}

module.exports = solution;
