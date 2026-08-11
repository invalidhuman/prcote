/**
 * 백준17298 오큰수
 * https://www.acmicpc.net/problem/17298
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
                3,
                5,
                2,
                7
            ]
        ],
        "expected": [
            5,
            7,
            7,
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

