/**
 * 백준1966 프린터 큐
 * https://www.acmicpc.net/problem/1966
 *
 * @returns {number[]}
 */
function solution(testCases) {
    // TODO: 풀이를 작성하세요.
    var answer = [];
    return answer;
}

const testCases = [
    {
        "args": [
            [
                {
                    "priorities": [
                        1
                    ],
                    "location": 0
                },
                {
                    "priorities": [
                        1,
                        2,
                        3,
                        4
                    ],
                    "location": 2
                },
                {
                    "priorities": [
                        1,
                        1,
                        9,
                        1,
                        1,
                        1
                    ],
                    "location": 0
                }
            ]
        ],
        "expected": [
            1,
            2,
            5
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

