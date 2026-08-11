/**
 * 백준2346 풍선 터뜨리기
 * https://www.acmicpc.net/problem/2346
 *
 * @returns {number[]}
 */
function solution(moves) {
    // TODO: 풀이를 작성하세요.
    var answer = [];
    return answer;
}

const testCases = [
    {
        "args": [
            [
                3,
                2,
                1,
                -3,
                -1
            ]
        ],
        "expected": [
            1,
            4,
            5,
            3,
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

