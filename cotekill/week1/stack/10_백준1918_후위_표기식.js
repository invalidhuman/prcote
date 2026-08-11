/**
 * 백준1918 후위 표기식
 * https://www.acmicpc.net/problem/1918
 *
 * @returns {string}
 */
function solution(expression) {
    // TODO: 풀이를 작성하세요.
    var answer = "";
    return answer;
}

const testCases = [
    {
        "args": [
            "A+B*C"
        ],
        "expected": "ABC*+"
    },
    {
        "args": [
            "A*(B+C)"
        ],
        "expected": "ABC+*"
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

