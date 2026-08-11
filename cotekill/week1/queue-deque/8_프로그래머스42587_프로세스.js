/**
 * 프로그래머스42587 프로세스
 * https://school.programmers.co.kr/learn/courses/30/lessons/42587
 *
 * @returns {number}
 */
function solution(priorities, location) {
    // TODO: 풀이를 작성하세요.
    var answer = 0;
    return answer;
}

const testCases = [
    {
        "args": [
            [
                2,
                1,
                3,
                2
            ],
            2
        ],
        "expected": 1
    },
    {
        "args": [
            [
                1,
                1,
                9,
                1,
                1,
                1
            ],
            0
        ],
        "expected": 5
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

