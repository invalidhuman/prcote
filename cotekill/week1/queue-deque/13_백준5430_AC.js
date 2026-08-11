/**
 * 백준5430 AC
 * https://www.acmicpc.net/problem/5430
 *
 * @returns {string[]}
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
                    "commands": "RDD",
                    "array": [
                        1,
                        2,
                        3,
                        4
                    ]
                },
                {
                    "commands": "DD",
                    "array": [
                        1,
                        2
                    ]
                },
                {
                    "commands": "RRD",
                    "array": [
                        1,
                        1,
                        2,
                        3,
                        5,
                        8
                    ]
                },
                {
                    "commands": "D",
                    "array": []
                }
            ]
        ],
        "expected": [
            "[2,1]",
            "[]",
            "[1,2,3,5,8]",
            "error"
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

