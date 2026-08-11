/**
 * 프로그래머스42584 주식가격
 * https://school.programmers.co.kr/learn/courses/30/lessons/42584
 *
 * @returns {number[]}
 */
function solution(prices) {
    // TODO: 풀이를 작성하세요.
    var answer = [];
    return answer;
}

const testCases = [
    {
        "args": [
            [
                1,
                2,
                3,
                2,
                3
            ]
        ],
        "expected": [
            4,
            3,
            1,
            1,
            0
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

