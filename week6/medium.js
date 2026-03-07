// 타겟 넘버 (lv. 2)

// https://school.programmers.co.kr/learn/courses/30/lessons/43165

/*
1. numbers 배열에는 0이상의 정수 (N<=20)
2. 
+4+1-2+1 = 4
+4-1+2-1 = 4
+4-1-2-1 = 0

[1,1] target = 2
+1+1
+1-1
-1+1
-1-1
답 : 1
처음에 sum도 0일 때 첫 idx 0부터 시작해서, +와 -를 붙인 거 재귀 호출
그다음 각각에 대해 +- 한 번씩 또 호출
4가지 경우에 대해 각각 target과의 일치여부를 확인하고, 유일하게 하나만 1이 나온다.
1+0+0+0 = 1가지
즉, 경우의 수가 몇개가되든 sum에 값을 더해가며 깊이 우선 탐색으로 끝가지 들어가서 
마지막에만 target과 일치하는 지 확인한다.


3. dfs. 한 번 체크를 위해 끝까지 가야함
4.
(1) 결과값을 담을 변수 : answer (target이 만들어지는 방법의 수)
(2) 재귀 함수 정의
  - 종료조건 : idx가 배열 끝일 때
  - return   === target ? 1 : 0 
  - 해당 idx에서 +를 붙인 경우와 - 경우를 붙인 경우를 합하는 재귀 호출

(3) 메인 함수에서 재귀 시작 및 결과 반환
5. 예외처리
주어지는 숫자의 개수는 2개 이상 20개 이하 => 빈 배열은 안들어옴
각 숫자는 1 이상 50 이하인 자연수 &
타겟 넘버는 1 이상 1000 이하인 자연수 => target이 0일이 없고, 

*/

// dfs함수를 정의해놓고, 메인 함수에서 dfs함수 자체를 반복시킬지,
// 아니면 초깃값을 지정한 dfs함수 하나만 호출하면 그 안에서 모든 경우의 수를 돌 게 할 지 고민을 많이함

function solution1(numbers, target) {
  var answer = 0; // target과 일치하는 dfs 방법의 수

  // 각 dfs 자체가 끝까지 갔을 때 각 트리의 가지에서 나오는 방법의 수를 합친 것
  function dfs(idx, sum) {
    if (idx === numbers.length) {
      return target === sum ? 1 : 0;
    }

    return dfs(idx + 1, sum + numbers[idx]) + dfs(idx + 1, sum - numbers[idx]);
  }

  answer = dfs(0, 0);

  return answer;
}

function solution2(numbers, target) {
  var answer = 0;

  // var index = 0;
  // var sum = 0;

  function dfs(idx, sum, numbers, target) {
    // 마지막까지 가기 전까진 return은 계속 하위에서 나온 결과들을 합친 것이 된다. 그래야 target과 일치할 때마다 방법 수가 1씩 더해진다.
    // 결국 마지막엔 1 혹은 0을 return한다.
    if (idx === numbers.length) {
      return sum === target ? 1 : 0;
    }

    return (
      dfs(idx + 1, sum + numbers[idx], numbers, target) +
      dfs(idx + 1, sum - numbers[idx], numbers, target)
    );
  }

  answer = dfs(0, 0, numbers, target);

  return answer;
}
