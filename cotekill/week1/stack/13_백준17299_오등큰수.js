/**
 * 백준17299 오등큰수
 * https://www.acmicpc.net/problem/17299
 *
 * @returns {number[]}
 */
function solution(numbers) {
    // TODO: 풀이를 작성하세요.
    var answer = [];
    return answer;
}

const testCases = [
    {
        "args": [
            [
                1,
                1,
                2,
                3,
                4,
                2,
                1
            ]
        ],
        "expected": [
            -1,
            -1,
            1,
            2,
            2,
            1,
            -1
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

