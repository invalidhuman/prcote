// https://school.programmers.co.kr/learn/courses/30/lessons/43165
// lv2_타겟넘버.js
function solution(numbers, target) {
  let answer = 0;

  /* 
    [1,1,1,1,1]
  
    -1+1-1+1+1 = 3
  
    재귀호출하면서 더할건지 뺄건지를 정하고 결과가 3이 나오는지 파악하고 맞으면 1을 return / 0
    재귀 시 합을 return하진 않아도 합을 전해줘야함 -> 매개변수
    
    각 숫자마다 두 가지 선택지가 있다.
    1. 현재 숫자를 더한다.
    2. 현재 숫자를 밴다.
    
    dfs를 재귀호출하며 '모든 경우의 수'를 탐색한다.
    
    dfs의 매개변수로
    - 현재 부호를 결정할 숫자의 인덱스
    - 이전 숫자들까지 계산한 누적합
    
    그리고 재귀 시마다 꼭 합을 return하지는 않더라도 합을 전달해줘야한다.
    return은 모든 숫자를 처리한 마지막에만 한다.
    이 때 sum 과 target을 비교한 후 가능한 방법을 하나 찾은 것이므로 answer를 증가시킨다.
   
  
    */

  function dfs(idx, sum) {
    // idx가 numbers.length 면 모든 숫자를 처리했다는 뜻
    // numbers.length -1이 아닌 이유는 마지막 인덱스 (length-1)를 dfs에 idx로 넣어 호출하자마자 모든 숫자가 처리된 게 아니기 때문이다.
    // 마지막 숫자까지 idx에 들어가 재귀를 해야하고,
    // numbers.length 를 호출할 때가 되어야 최종적으로 다 더해진 sum이 된다.
    if (idx == numbers.length) {
      if (sum === target) {
        answer++; // 아예 return이 없는 함수를 써도됨. 외부 참조하고.
      }
      // 타겟 넘버가 아닐 경우 answer에 영향을 주지 않고 그냥 return
      return;
    }

    dfs(idx + 1, sum + numbers[idx]);
    dfs(idx + 1, sum - numbers[idx]);
  }

  dfs(0, 0); // 0 번째 인덱스부터 시작해서 각 부호에 대해 재귀호출
  return answer;
}
