const solution = require("./1_프로그래머스12915_문자열_내_마음대로_정렬하기");
const { runJudge } = require("./testRunner");

const hiddenCases = [
  { strings: ["a"], n: 0 },
  { strings: ["z", "a", "m"], n: 0 },
  { strings: ["baa", "aba", "aab"], n: 1 },
  { strings: ["zaa", "yaa", "xaa"], n: 2 },
  { strings: ["same", "same", "sand"], n: 2 },
  { strings: ["az", "aa", "ab", "ba", "bz"], n: 1 },
  {
    strings: Array.from({ length: 50 }, (_, index) =>
      `${String.fromCharCode(97 + (index % 26))}${String.fromCharCode(97 + Math.floor(index / 26))}x`,
    ).reverse(),
    n: 0,
  },
  {
    strings: [
      "z".repeat(100),
      `${"z".repeat(99)}a`,
      `${"a".repeat(99)}z`,
      "a".repeat(100),
    ],
    n: 99,
  },
];

function comesBefore(left, right, n) {
  if (left[n] !== right[n]) return left[n] < right[n];
  return left < right;
}

function independentlySort(strings, n) {
  const result = [];

  for (const word of strings) {
    let index = result.length;
    while (index > 0 && comesBefore(word, result[index - 1], n)) index -= 1;
    result.splice(index, 0, word);
  }

  return result;
}

runJudge(hiddenCases, ({ strings, n }) => {
  const expected = independentlySort(strings, n);
  const actual = solution(strings, n);

  return JSON.stringify(actual) === JSON.stringify(expected);
});
