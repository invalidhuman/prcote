const solution = require("./1_프로그래머스12915_문자열_내_마음대로_정렬하기");
const { runPublicTests } = require("./testRunner");

const testCases = [
  {
    input: [["sun", "bed", "car"], 1],
    expected: ["car", "bed", "sun"],
  },
  {
    input: [["abce", "abcd", "cdx"], 2],
    expected: ["abcd", "abce", "cdx"],
  },
];

runPublicTests(solution, testCases);
