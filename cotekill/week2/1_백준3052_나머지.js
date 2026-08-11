/**
 * 백준 3052 나머지
 * https://www.acmicpc.net/problem/3052
 *
 * @param {number[]} numbers 10개의 자연수
 * @returns {number} 서로 다른 나머지의 개수
 */
function solution(numbers) {
    // TODO: 풀이를 작성하세요.
    var answer = 0;
    return answer;
}

const testCases = [
    {
        args: [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]],
        expected: 10,
    },
    {
        args: [[42, 84, 252, 420, 840, 126, 42, 84, 420, 126]],
        expected: 1,
    },
    {
        args: [[39, 40, 41, 42, 43, 44, 82, 83, 84, 85]],
        expected: 6,
    },
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
