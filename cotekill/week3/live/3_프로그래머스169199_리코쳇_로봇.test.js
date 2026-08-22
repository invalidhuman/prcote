const solution = require("./3_프로그래머스169199_리코쳇_로봇");
const { runPublicTests } = require("./testRunner");

const testCases = [
  {
    input: [["...D..R", ".D.G...", "....D.D", "D....D.", "..D...."]],
    expected: 7,
  },
  {
    input: [[".D.R", "....", ".G..", "...D"]],
    expected: -1,
  },
];

runPublicTests(solution, testCases);
