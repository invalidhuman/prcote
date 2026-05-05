// 의상(Lv.2) - 해시
// https://school.programmers.co.kr/learn/courses/30/lessons/42578

// 매일 다른 옷 조합 (종류별 개수를 세고 각 종류마다 안 입는 경우 1개를 더해서 모두 곱한 뒤 전체에서 -1 )

function solution(clothes) {
  let countByKind = {}; // "headgear":1, "face":2

  for (const [name, kind] of clothes) {
    // 이미 있
    if (countByKind[kind] != undefined) countByKind[kind] += 1;
    else countByKind[kind] = 1;
  }

  let answer = 1;

  for (const kind in countByKind) {
    answer *= countByKind[kind] + 1;
  }

  answer -= 1;

  return answer;
}

// 요약
// for...in → key 순회
// for...of → 값 순회 (iterable)

function solutionOfSolution(clothes) {
  let countByKind = {}; // 객체 선언. key Value 형태의 해시맵 (Dictionary)
  // Iterable이 아니므로 for const x of countByKind는 사용불가

  countByKind = {
    headgear: 2,
    eyewear: 1,
  };

  // 반면 배열은 Iterable에 해당하므로 const ~ of Iterable 사용이 가능하다.
  for (const [name, kind] of clothes) {
  }

  // 원래 for ... in의 정의는 '객체의 key르 순회한다'이다.
  for (const type in countByKind) {
  }
  // 내부적으로 아래와 동일하다.
  for (const key of Object.keys(countByKind)) {
  }
}
