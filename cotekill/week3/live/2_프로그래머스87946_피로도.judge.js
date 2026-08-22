const solution = require("./2_프로그래머스87946_피로도");
const { runJudge } = require("./testRunner");

const hiddenCases = [
  { k: 1, dungeons: [[1, 1]] },
  { k: 1, dungeons: [[2, 1]] },
  {
    k: 10,
    dungeons: [
      [10, 10],
      [10, 1],
    ],
  },
  {
    k: 20,
    dungeons: [
      [10, 5],
      [10, 5],
      [10, 5],
    ],
  },
  {
    k: 100,
    dungeons: [
      [100, 1],
      [99, 98],
      [2, 1],
      [1, 1],
    ],
  },
  {
    k: 5000,
    dungeons: Array.from({ length: 8 }, (_, index) => [1000 - index, 125]),
  },
  {
    k: 50,
    dungeons: [
      [50, 10],
      [40, 20],
      [30, 10],
      [30, 30],
      [20, 5],
      [15, 5],
      [10, 10],
      [5, 5],
    ],
  },
];

function findMaximumCount(k, dungeons) {
  const stateCount = 1 << dungeons.length;
  const remainingFatigue = Array(stateCount).fill(-1);
  remainingFatigue[0] = k;
  let maximum = 0;

  for (let mask = 0; mask < stateCount; mask += 1) {
    if (remainingFatigue[mask] < 0) continue;
    maximum = Math.max(maximum, mask.toString(2).replaceAll("0", "").length);

    for (let index = 0; index < dungeons.length; index += 1) {
      if (mask & (1 << index)) continue;
      const [required, cost] = dungeons[index];
      if (remainingFatigue[mask] < required) continue;

      const nextMask = mask | (1 << index);
      remainingFatigue[nextMask] = Math.max(
        remainingFatigue[nextMask],
        remainingFatigue[mask] - cost,
      );
    }
  }

  return maximum;
}

runJudge(hiddenCases, ({ k, dungeons }) => {
  const original = structuredClone(dungeons);
  const actual = solution(k, dungeons);
  const expected = findMaximumCount(k, original);

  return actual === expected && JSON.stringify(dungeons) === JSON.stringify(original);
});
