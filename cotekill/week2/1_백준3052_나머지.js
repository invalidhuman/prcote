/**
 * 백준 3052 나머지
 * https://www.acmicpc.net/problem/3052
 *
 * @param {number[]} numbers 10개의 자연수
 * @returns {number} 서로 다른 나머지의 개수
 */

// 방법1) 검사한 나머지들을 배열에 하나씩 추가하되, 매번 이미 있는 지 확인한다.
// 방법 1-1) O(n^2) : includes() 사용
function solution(numbers) {
  // includes() + for 문에 의해 1+2+3+...n-1번 검사하게 돼서 O(n^2)
  // n = 10으 고정이라 이 문제에서는 사용해도 괜찮음
  var remainders = [];

  for (const number of numbers) {
    const remainder = number % 42;
    if (remainders.includes(remainder)) {
      // result에 이미 있는 나머지값이면, 그냥 지나친다
      continue;
    } else {
      remainders.push(remainder);
    }
    // result.push(remainder);
  }

  return remainders.length;
}

// 방법 1-2) O(n) : Set 사용
function solution2(numbers) {
  var remainders = new Set();
  // 반복문 O(n)
  for (const number of numbers) {
    // 나머지 계산 : O(1)
    // Set 추가 : 평균 O(1)
    remainders.add(number % 42);
  }

  return remainders.size;
}

// 방법 2) 나머지가 0~41로 고정이니, 배열의 Index를 이용한다.
function solution3(numbers) {
  var remainders = Array(42).fill(false);

  // 인덱스를 곧 나머지로 사용하니,
  // 같은 나머지가 나올 경우 true로 지정된 요소에 또 true를 지정하게 될 뿐이다.
  for (const number of numbers) {
    remainders[number % 42] = true;
  }
  return remainders.filter(Boolean).length; // true만 filter한 뒤 길이 반환
}

const testCases = [
  {
    args: [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]],
    expected: 10,
  },
  {
    args: [[42, 84, 252, 420, 840, 126, 42, 84, 420, 126]],
    expected: 1,
  },
  {
    args: [[39, 40, 41, 42, 43, 44, 82, 83, 84, 85]],
    expected: 6,
  },
];

if (require.main === module) {
  testCases.forEach(({ args, expected }, index) => {
    // 아래 solution을 solution2, solution3 등으로 바꾸어 여러 테스트 케이스를 처리할 수 있습니다.
    const actual = solution3(...args);
    const passed = JSON.stringify(actual) === JSON.stringify(expected);

    console.log(`예제 ${index + 1}: ${passed ? "PASS" : "FAIL"}`);
    if (!passed) {
      console.log("  expected:", expected);
      console.log("  actual:  ", actual);
    }
  });
}

module.exports = solution;
