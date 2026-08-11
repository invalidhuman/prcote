/**
 * 백준1874 스택 수열
 * https://www.acmicpc.net/problem/1874
 *
 * @returns {string[] | null}
 */
function solution(target) {
    // TODO: 풀이를 작성하세요.
    var answer = [];
    return answer;
}

const testCases = [
    {
        "args": [
            [
                4,
                3,
                6,
                8,
                7,
                5,
                2,
                1
            ]
        ],
        "expected": [
            "+",
            "+",
            "+",
            "+",
            "-",
            "-",
            "+",
            "+",
            "-",
            "+",
            "+",
            "-",
            "-",
            "-",
            "-",
            "-"
        ]
    },
    {
        "args": [
            [
                1,
                2,
                5,
                3,
                4
            ]
        ],
        "expected": null
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

