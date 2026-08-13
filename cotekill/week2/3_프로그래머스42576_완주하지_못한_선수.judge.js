const solution = require("./3_프로그래머스42576_완주하지_못한_선수");

const solutions = [
  { name: "풀이 1 (Object)", run: solution },
  { name: "풀이 2 (Map)", run: solution.solution2 },
];

function alphabeticName(index) {
  let value = index;
  let suffix = "";

  do {
    suffix = String.fromCharCode(97 + (value % 26)) + suffix;
    value = Math.floor(value / 26) - 1;
  } while (value >= 0);

  return `runner${suffix}`;
}

const hiddenCases = [
  () => ({ participant: ["solo"], completion: [], expected: "solo" }),
  () => ({
    participant: ["missing", "alpha", "beta"],
    completion: ["alpha", "beta"],
    expected: "missing",
  }),
  () => ({
    participant: ["alpha", "beta", "missing"],
    completion: ["alpha", "beta"],
    expected: "missing",
  }),
  () => ({
    participant: ["alpha", "missing", "beta", "gamma"],
    completion: ["gamma", "alpha", "beta"],
    expected: "missing",
  }),
  () => ({
    participant: ["same", "other", "same"],
    completion: ["same", "other"],
    expected: "same",
  }),
  () => ({
    participant: ["same", "same"],
    completion: ["same"],
    expected: "same",
  }),
  () => ({
    participant: Array(1000).fill("same"),
    completion: Array(999).fill("same"),
    expected: "same",
  }),
  () => ({
    participant: ["constructor", "alpha", "beta"],
    completion: ["alpha", "beta"],
    expected: "constructor",
  }),
  () => ({
    participant: ["abcdefghijklmnopqrst", "a", "ab"],
    completion: ["ab", "a"],
    expected: "abcdefghijklmnopqrst",
  }),
  () => ({
    participant: ["anna", "anne", "annie", "ann"],
    completion: ["ann", "anna", "anne"],
    expected: "annie",
  }),
  () => ({
    participant: ["a", "b", "a", "b", "a", "target"],
    completion: ["b", "a", "a", "b", "a"],
    expected: "target",
  }),
  () => {
    const participant = Array.from({ length: 100000 }, (_, index) =>
      alphabeticName(index),
    );
    const expected = participant[54321];
    const completion = participant.toSpliced(54321, 1).reverse();
    return { participant, completion, expected };
  },
  () => {
    const participant = [
      ...Array(50000).fill("alpha"),
      ...Array(49999).fill("beta"),
      "target",
    ];
    const completion = [
      ...Array(49999).fill("beta"),
      ...Array(50000).fill("alpha"),
    ];
    return { participant, completion, expected: "target" };
  },
];

console.log("제출 및 채점하기");

let allPassed = true;

for (const { name, run } of solutions) {
  console.log(`\n${name}`);
  let passedCount = 0;

  hiddenCases.forEach((createCase, index) => {
    const { participant, completion, expected } = createCase();
    const startedAt = process.hrtime.bigint();
    let passed = false;

    try {
      passed = run(participant, completion) === expected;
    } catch {
      passed = false;
    }

    const elapsed = Number(process.hrtime.bigint() - startedAt) / 1_000_000;
    if (passed) passedCount += 1;
    else allPassed = false;

    console.log(
      `테스트 ${String(index + 1).padStart(2, " ")}: ${passed ? "통과" : "실패"} (${elapsed.toFixed(2)}ms)`,
    );
  });

  console.log(`채점 결과: ${passedCount} / ${hiddenCases.length}`);
}

if (!allPassed) process.exitCode = 1;
