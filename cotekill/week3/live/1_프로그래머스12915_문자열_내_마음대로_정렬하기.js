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

function solution3(strings, n) {
  // reduce는 요소들을 누적하여 하나의 결과를 반환
  // map은 각 요소를 변환한 새 배열을 반환한

  // 배열의 길이가 N, 문자열의 최대길이가 L일 때,
  return strings
    .map((word) => word[n] + word) // 문자추가 : O(N * L)
    .sort() // 최악일 때 O(NlogN)
    .map((word) => word.slice(1)); // O(N*L)

  // strings : 문자열로 구성된 리스트
  // ["sun","bed","car"]
  // n  = 1 -> u, e, a
  // ["usun","ebed","acar"]
  // 정렬하고 나서 앞 글자를 빼준다.
}

module.exports = solution;
