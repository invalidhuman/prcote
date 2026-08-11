/**
 * 프로그래머스12906 같은 숫자는 싫어
 * https://school.programmers.co.kr/learn/courses/30/lessons/12906
 *
 * @returns {number[]}
 */
function solution(arr) {
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
                3,
                3,
                0,
                1,
                1
            ]
        ],
        "expected": [
            1,
            3,
            0,
            1
        ]
    },
    {
        "args": [
            [
                4,
                4,
                4,
                3,
                3
            ]
        ],
        "expected": [
            4,
            3
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

