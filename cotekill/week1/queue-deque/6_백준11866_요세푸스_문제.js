/**
 * 백준11866 요세푸스 문제
 * https://www.acmicpc.net/problem/11866
 *
 * @returns {number[]}
 */
function solution(n, k) {
    // TODO: 풀이를 작성하세요.
    var answer = [];
    return answer;
}

const testCases = [
    {
        "args": [
            7,
            3
        ],
        "expected": [
            3,
            6,
            2,
            7,
            5,
            1,
            4
        ]
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
