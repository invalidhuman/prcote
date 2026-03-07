// 콜라츠 추측 (lv. 1)

// https://school.programmers.co.kr/learn/courses/30/lessons/12943

/*
1. 입력값 범위 : num < 8,000,000 : 그냥 구현같다.
2. 1이될때까지 반복 -> 1되면 종료, 몇 번 걸리는지 count
3. 그냥 반복문. dfs라기엔 여러가지 길이 있는 게 아님.
dfs려면 여러가지 선택지가 있을 때 한쪽 길을 끝까지 가보는 탐색 행위를 해야함
4. 
num % 2 == 0 => /2
num % 2 != 0 => *3 +1 
count
5. 예외
처음부터 1이면?
=> while로 반복문 안에 아예 안들어가게 하기
*/
function solution1(num) {
  var answer = 0; // 반복횟수

  // while (num !=1 && num != 500) {
  while (1 < num && answer < 500) {
    num % 2 == 0 ? (num /= 2) : (num = num * 3 + 1);

    answer++; // 반복횟수 증가
  }

  return answer != 500 ? answer : -1;
}

function solution2(num) {
  var answer = 0;

  // 입력이 1일 때는 아예 while을 돌지 않으므로 초깃값 0을 출력
  while (num != 1 && answer != 500) {
    if (num % 2 == 0) {
      num /= 2;
    } else {
      num = num * 3 + 1;
    }

    answer++;
    console.log(answer);
  }

  return answer != 500 ? answer : -1;
}

// 재귀로 푼다면
function solution3(num) {
  //count를 외부에 작성하지 않는다. 함수 외부의 변수를 직접 수정하면 디버깅 시 추적이 어려움
  function collatz(num, count) {
    if (num === 1) return count;
    if (count >= 500) return -1;
    // count++;

    return collatz(num % 2 == 0 ? num / 2 : num * 3 + 1, count + 1); // count를 여기서 올리면 됨
  }

  return collatz(num, 0); // count를 0으로 설정
}
