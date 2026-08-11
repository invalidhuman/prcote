/**
 * 백준10773 제로
 * https://www.acmicpc.net/problem/10773
 *
 * @returns {number}
 */
function solution(numbers) {
    // TODO: 풀이를 작성하세요.
    var answer = 0;
    return answer;
}

const testCases = [
    {
        "args": [
            [
                3,
                0,
                4,
                0
            ]
        ],
        "expected": 0
    },
    {
        "args": [
            [
                1,
                3,
                5,
                4,
                0,
                0,
                7,
                0,
                0,
                6
            ]
        ],
        "expected": 7
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

