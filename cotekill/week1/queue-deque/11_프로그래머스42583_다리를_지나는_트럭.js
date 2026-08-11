/**
 * 프로그래머스42583 다리를 지나는 트럭
 * https://school.programmers.co.kr/learn/courses/30/lessons/42583
 *
 * @returns {number}
 */
function solution(bridgeLength, weight, truckWeights) {
    // TODO: 풀이를 작성하세요.
    var answer = 0;
    return answer;
}

const testCases = [
    {
        "args": [
            2,
            10,
            [
                7,
                4,
                5,
                6
            ]
        ],
        "expected": 8
    },
    {
        "args": [
            100,
            100,
            [
                10
            ]
        ],
        "expected": 101
    },
    {
        "args": [
            100,
            100,
            [
                10,
                10,
                10,
                10,
                10,
                10,
                10,
                10,
                10,
                10
            ]
        ],
        "expected": 110
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

