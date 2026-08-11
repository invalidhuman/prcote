/**
 * 백준2164 카드2
 * https://www.acmicpc.net/problem/2164
 *
 * @returns {number}
 */
function solution(n) {
    // TODO: 풀이를 작성하세요.
    var answer = 0;
    return answer;
}

const testCases = [
    {
        "args": [
            6
        ],
        "expected": 4
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

