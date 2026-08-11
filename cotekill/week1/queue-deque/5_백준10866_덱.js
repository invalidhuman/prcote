/**
 * 백준10866 덱
 * https://www.acmicpc.net/problem/10866
 *
 * @returns {number[]}
 */
function solution(commands) {
    // TODO: 풀이를 작성하세요.
    var answer = [];
    return answer;
}

const testCases = [
    {
        "args": [
            [
                "push_back 1",
                "push_front 2",
                "front",
                "back",
                "size",
                "empty",
                "pop_front",
                "pop_back",
                "pop_front",
                "size",
                "empty",
                "pop_back",
                "push_front 3",
                "empty",
                "front"
            ]
        ],
        "expected": [
            2,
            1,
            2,
            0,
            2,
            1,
            -1,
            0,
            1,
            -1,
            0,
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

