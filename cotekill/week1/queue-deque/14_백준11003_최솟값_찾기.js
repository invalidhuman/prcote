/**
 * 백준11003 최솟값 찾기
 * https://www.acmicpc.net/problem/11003
 *
 * @returns {number[]}
 */
function solution(numbers, windowSize) {
    // TODO: 풀이를 작성하세요.
    var answer = [];
    return answer;
}

const testCases = [
    {
        "args": [
            [
                1,
                5,
                2,
                3,
                6,
                2,
                3,
                7,
                3,
                5,
                2,
                6
            ],
            3
        ],
        "expected": [
            1,
            1,
            1,
            2,
            2,
            2,
            2,
            2,
            3,
            3,
            2,
            2
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

