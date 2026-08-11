/**
 * 백준1406 에디터
 * https://www.acmicpc.net/problem/1406
 *
 * @returns {string}
 */
function solution(initialText, commands) {
    // TODO: 풀이를 작성하세요.
    var answer = "";
    return answer;
}

const testCases = [
    {
        "args": [
            "abc",
            [
                "P x",
                "L",
                "P y"
            ]
        ],
        "expected": "abcyx"
    },
    {
        "args": [
            "abc",
            [
                "L",
                "L",
                "L",
                "L",
                "L",
                "P x",
                "L",
                "B",
                "P y"
            ]
        ],
        "expected": "yxabc"
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

