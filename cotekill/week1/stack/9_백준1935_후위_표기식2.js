/**
 * 백준1935 후위 표기식2
 * https://www.acmicpc.net/problem/1935
 *
 * @returns {number}
 */
function solution(expression, values) {
    // TODO: 풀이를 작성하세요.
    var answer = 0;
    return answer;
}

const testCases = [
    {
        "args": [
            "ABC*+DE/-",
            [
                1,
                2,
                3,
                4,
                5
            ]
        ],
        "expected": 6.2
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

