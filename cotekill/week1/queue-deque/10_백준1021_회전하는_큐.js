/**
 * 백준1021 회전하는 큐
 * https://www.acmicpc.net/problem/1021
 *
 * @returns {number}
 */
function solution(n, targets) {
    // TODO: 풀이를 작성하세요.
    var answer = 0;
    return answer;
}

const testCases = [
    {
        "args": [
            10,
            [
                1,
                2,
                3
            ]
        ],
        "expected": 0
    },
    {
        "args": [
            10,
            [
                2,
                9,
                5
            ]
        ],
        "expected": 8
    },
    {
        "args": [
            32,
            [
                27,
                16,
                30,
                11,
                6,
                23
            ]
        ],
        "expected": 59
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

