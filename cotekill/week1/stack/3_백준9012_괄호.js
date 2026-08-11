/**
 * 백준9012 괄호
 * https://www.acmicpc.net/problem/9012
 *
 * @returns {string[]}
 */
function solution(strings) {
    // TODO: 풀이를 작성하세요.
    var answer = [];
    return answer;
}

const testCases = [
    {
        "args": [
            [
                "(())())",
                "(((()())()",
                "(()())((()))",
                "((()()(()))(((())))()",
                "()()()()(()()())()",
                "(()((())()("
            ]
        ],
        "expected": [
            "NO",
            "NO",
            "YES",
            "NO",
            "YES",
            "NO"
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

