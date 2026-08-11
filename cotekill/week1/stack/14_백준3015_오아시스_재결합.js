/**
 * 백준3015 오아시스 재결합
 * https://www.acmicpc.net/problem/3015
 *
 * @returns {number}
 */
function solution(heights) {
    // TODO: 풀이를 작성하세요.
    var answer = 0;
    return answer;
}

const testCases = [
    {
        "args": [
            [
                2,
                4,
                1,
                2,
                2,
                5,
                1
            ]
        ],
        "expected": 10
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

