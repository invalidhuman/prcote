/**
 * 백준2493 탑
 * https://www.acmicpc.net/problem/2493
 *
 * @returns {number[]}
 */
function solution(heights) {
    // TODO: 풀이를 작성하세요.
    var answer = [];
    return answer;
}

const testCases = [
    {
        "args": [
            [
                6,
                9,
                5,
                7,
                4
            ]
        ],
        "expected": [
            0,
            0,
            2,
            2,
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

