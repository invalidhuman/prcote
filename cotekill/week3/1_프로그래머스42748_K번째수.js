/**
 * 프로그래머스42748 K번째수
 * https://school.programmers.co.kr/learn/courses/30/lessons/42748
 *
 * @param {number[]} array 숫자 배열
 * @param {number[][]} commands [i, j, k] 명령 목록
 * @returns {number[]} 각 명령의 결과
 */
function solution(array, commands) {
  var answer = [];

  // (1) i~j번째 숫자까지 자르기

  // commands[i][0] : 몇 번째부터? -1 = 시작index
  // commands[i][1] : 몇 번째숫자까지? -1 = 마지막index
  // commands[i][2] : 몇번 째 숫자 출력?

  for (let i = 0; i < commands.length; i++) {
    // 인덱스로 정리
    const start = commands[i][0] - 1;
    const end = commands[i][1] - 1;
    const idx = commands[i][2] - 1;

    // 자르기 (1,3)이면 인덱스1부터 인덱스 3-1까지
    // array.slice(start,end+1)
    const tempArr = array.slice(start, end + 1);

    // 숫자 오름차순 정렬
    // 원본이 변경되면 안되니 새로 만들어 쓴다.
    tempArr.sort((a, b) => a - b);

    // 찾고 넣기
    answer.push(tempArr[idx]);
  }

  return answer;
}

module.exports = solution;
