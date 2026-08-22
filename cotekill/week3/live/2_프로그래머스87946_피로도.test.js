const solution = require("./2_프로그래머스87946_피로도");
const { runPublicTests } = require("./testRunner");

const testCases = [
  {
    input: [
      80,
      [
        [80, 20],
        [50, 40],
        [30, 10],
      ],
    ],
    expected: 3,
  },
];

runPublicTests(solution, testCases);
