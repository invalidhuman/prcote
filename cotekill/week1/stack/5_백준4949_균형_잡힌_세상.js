/**
 * 백준4949 균형 잡힌 세상
 * https://www.acmicpc.net/problem/4949
 *
 * @returns {string[]}
 */
function solution(lines) {
    // TODO: 풀이를 작성하세요.
    var answer = [];
    return answer;
}

const testCases = [
    {
        "args": [
            [
                "So when I die (the [first] I will see in (heaven) is a score list).",
                "[ first in ] ( first out ).",
                "Half Moon tonight (At least it is better than no Moon at all].",
                "A rope may form )( a trail in a maze.",
                "Help( I[m being held prisoner in a fortune cookie factory)].",
                "([ (([( [ ] ) ( ) (( ))] )) ]).",
                " ."
            ]
        ],
        "expected": [
            "yes",
            "yes",
            "no",
            "no",
            "no",
            "yes",
            "yes"
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
