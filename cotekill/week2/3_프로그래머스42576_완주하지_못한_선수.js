/**
 * 프로그래머스42576 완주하지 못한 선수
 * https://school.programmers.co.kr/learn/courses/30/lessons/42576
 *
 * @param {string[]} participant 참가자 이름 목록
 * @param {string[]} completion 완주자 이름 목록
 * @returns {string} 완주하지 못한 선수의 이름
 */

// 첫 번째 풀이: Object 사용
function solution(participant, completion) {
  var answer = "";

  // participant : ["leo","kiki","eden"]
  // completion : ["eden","kiki"]

  // return "leo"
  // 여기서 kiki가 두 명이었다면 return은 leo, kiki라고 생각할수있지만,
  // 문제 조건이 ' 한 명의 선수를 제외하고는 모든 선수가 마라톤을 완주하였습니다' 'completion의 길이는 participant의 길이보다 1 작습니다.' 이므로 반드시 한명의 이름만 출력되게끔 예제가 주어진다.

  // completion의 이름이 participant에 있는지 확인
  // const namelist = new Map();
  const namelist = {};

  // 1. participant 에서 각각의 명수를 추가한다
  // {"mislav":2, "stanko":1,"ana":1}
  for (const name of participant) {
    if (namelist[name] >= 1) {
      // Map 자료구조가 아닌 객체 {} 이기 때문에 가능한 동적 프로퍼티 접근
      namelist[name]++;
    } else {
      namelist[name] = 1;
    }
  }

  // 2. completion 에서 '무조건 한 명은 없다는 점'을 고려해,
  // 2-(1). 아예 0인경우 -> return
  // 2-(2). 0인 경우는 안나와도 차이가 있는 경우 ->

  for (const name of completion) {
    // completion 에 있는 참가자는 partipant에는 다 있을 수 밖에 없으므로, 이미 namelist에 다 추가됐을 것이다.
    namelist[name]--;
  }

  for (const name in namelist) {
    if (namelist[name] === 1) answer = name;
  }

  return answer;
}

// 두 번째 풀이: Map 사용
function solution2(participant, completion) {
  const counts = new Map();

  for (const name of participant) {
    counts.set(name, (counts.get(name) ?? 0) + 1);
  }

  for (const name of completion) {
    counts.set(name, counts.get(name) - 1);
  }

  // python의 for key, value in my_dict.items(): 와 유사한 문법
  for (const [name, count] of counts) {
    if (count == 1) return name;
  }
}

module.exports = solution;
module.exports.solution2 = solution2;
