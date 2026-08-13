const solution = require("./2_프로그래머스12946_하노이의_탑");

// 프로그래머스의 비공개 입력은 알 수 없으므로 제한 범위와 경계값을 고려해 구성한다.
const hiddenInputs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 14, 15];

function validate(n, moves) {
  if (!Array.isArray(moves)) return false;
  if (moves.length !== 2 ** n - 1) return false;

  const rods = [
    [],
    Array.from({ length: n }, (_, index) => n - index),
    [],
    [],
  ];

  for (const move of moves) {
    if (!Array.isArray(move) || move.length !== 2) return false;

    const [from, to] = move;
    if (!Number.isInteger(from) || !Number.isInteger(to)) return false;
    if (from < 1 || from > 3 || to < 1 || to > 3 || from === to) return false;
    if (rods[from].length === 0) return false;

    const disk = rods[from][rods[from].length - 1];
    const targetTop = rods[to][rods[to].length - 1];
    if (targetTop !== undefined && targetTop < disk) return false;

    rods[from].pop();
    rods[to].push(disk);
  }

  const expected = Array.from({ length: n }, (_, index) => n - index);
  return (
    rods[1].length === 0 &&
    rods[2].length === 0 &&
    JSON.stringify(rods[3]) === JSON.stringify(expected)
  );
}

console.log("제출 및 채점하기\n");

let passedCount = 0;

hiddenInputs.forEach((n, index) => {
  const startedAt = process.hrtime.bigint();
  let passed = false;

  try {
    passed = validate(n, solution(n));
  } catch {
    passed = false;
  }

  const elapsed = Number(process.hrtime.bigint() - startedAt) / 1_000_000;
  if (passed) passedCount += 1;

  console.log(
    `테스트 ${String(index + 1).padStart(2, " ")}: ${passed ? "통과" : "실패"} (${elapsed.toFixed(2)}ms)`,
  );
});

console.log(`\n채점 결과: ${passedCount} / ${hiddenInputs.length}`);

if (passedCount !== hiddenInputs.length) process.exitCode = 1;
