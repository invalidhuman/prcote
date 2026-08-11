/**
 * 프로그래머스12909 올바른 괄호
 * https://school.programmers.co.kr/learn/courses/30/lessons/12909
 *
 * @returns {boolean}
 */
function solution(s) {
    // TODO: 풀이를 작성하세요.
    var answer = false;
    return answer;
}

const testCases = [
    {
        "args": [
            "()()"
        ],
        "expected": true
    },
    {
        "args": [
            "(())()"
        ],
        "expected": true
    },
    {
        "args": [
            ")()("
        ],
        "expected": false
    },
    {
        "args": [
            "(()("
        ],
        "expected": false
    }
];

if (require.main === module) {
    testCases.forEach(({ args, expected }, index) => {
        const actual = solution(...args);
        const passed = JSON.stringify(actual) === JSON.stringify(expected);
        console.log(`예제 ${index + 1}: ${passed ? "PASS" : "FAIL"}`);
        if (!passed) {
            console.log("  expected:", expected);
            console.log("  actual:  ", actual);
        }
    });
}

module.exports = solution;

