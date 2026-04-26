// 의상(Lv.2) - 해시
// https://school.programmers.co.kr/learn/courses/30/lessons/42578

// 매일 다른 옷 조합 (종류별 개수를 세고 각 종류마다 안 입는 경우 1개를 더해서 모두 곱한 뒤 전체에서 -1 )

function solution(clothes) {
  // 각 종류별로 최대 1가지
  // 안입거나 한개만 입거나
  // 최소 1개는 입음
  // 행: ["yellow_hat","headgear"]
  // 행 개수 1~30
  // 동명 x
  // 입출력 예랑 설명도같이있음
  // yellow_hat
  // 같은종류라고 순서대로 있는 건 아님
  // 얼굴 : 0,1,2
  // [["yellow_hat", "headgear"]] -> 0,1 -> 1가지
  // [["yellow_hat", "headgear"], ["blue_sunglasses", "eyewear"], ["green_turban", "headgear"]]
  // 헤드 2 아이 1 -> 5 가지
  // 0,1,2 => 0,1 3*2 -1 = 5가지(0,0을 뺀다)
  // 0 : 안입는다 , 1: 1번 옷 , 2: 2번 옷
  // (0,1,2,3) => 4 - 1 3가지
  // 다 다른 경우 (0,1) (0,1) (0,1) => 2*2*2 - 1 = 7가지

  // 눈 : 0,1

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
// 내가 처음 푼 풀이가 face face face일 때도 해당이 되는건가? 마지막에 1을 빼는데?
