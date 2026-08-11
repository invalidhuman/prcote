/**
 * 프로그래머스42586 기능개발
 * https://school.programmers.co.kr/learn/courses/30/lessons/42586
 *
 * @returns {number[]}
 */
function solution(progresses, speeds) {
    // TODO: 풀이를 작성하세요.
    var answer = [];
    return answer;
}

const testCases = [
    {
        "args": [
            [
                93,
                30,
                55
            ],
            [
                1,
                30,
                5
            ]
        ],
        "expected": [
            2,
            1
        ]
    },
    {
        "args": [
            [
                95,
                90,
                99,
                99,
                80,
                99
            ],
            [
                1,
                1,
                1,
                1,
                1,
                1
            ]
        ],
        "expected": [
            1,
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

