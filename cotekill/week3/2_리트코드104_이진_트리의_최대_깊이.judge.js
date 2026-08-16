const solution = require("./2_리트코드104_이진_트리의_최대_깊이");

function makeLeftChain(nodeCount) {
  const values = [(0 % 201) - 100];

  for (let index = 1; index < nodeCount; index++) {
    values.push((index % 201) - 100, null);
  }

  return values;
}

function makeRightChain(nodeCount) {
  const values = [];

  for (let index = 0; index < nodeCount; index++) {
    values.push(100 - (index % 201));
    if (index < nodeCount - 1) values.push(null);
  }

  return values;
}

const hiddenCases = [
  [],
  [0],
  [-100, null, 100],
  [1, 2, 3, 4, 5, 6, 7],
  [1, 2, null, 3, null, 4, null, 5],
  [1, 2, 3, null, 4, null, 5, 6, null, null, 7],
  Array(1_023).fill(7),
  makeLeftChain(127),
  makeRightChain(10_000),
];

function buildTree(values) {
  if (values.length === 0) return null;

  const root = { val: values[0], left: null, right: null };
  const queue = [root];
  let valueIndex = 1;
  let nodeIndex = 0;

  while (valueIndex < values.length) {
    const node = queue[nodeIndex++];

    const leftValue = values[valueIndex++];
    if (leftValue !== null && leftValue !== undefined) {
      node.left = { val: leftValue, left: null, right: null };
      queue.push(node.left);
    }

    const rightValue = values[valueIndex++];
    if (rightValue !== null && rightValue !== undefined) {
      node.right = { val: rightValue, left: null, right: null };
      queue.push(node.right);
    }
  }

  return root;
}

function calculateDepth(root) {
  if (root === null) return 0;

  const queue = [root];
  let nodeIndex = 0;
  let depth = 0;

  while (nodeIndex < queue.length) {
    const levelEnd = queue.length;

    while (nodeIndex < levelEnd) {
      const node = queue[nodeIndex++];
      if (node.left !== null) queue.push(node.left);
      if (node.right !== null) queue.push(node.right);
    }

    depth += 1;
  }

  return depth;
}

function serializeTree(root) {
  if (root === null) return [];

  const values = [];
  const queue = [root];
  let nodeIndex = 0;

  while (nodeIndex < queue.length) {
    const node = queue[nodeIndex++];

    if (node === null) {
      values.push(null);
      continue;
    }

    values.push(node.val);
    queue.push(node.left, node.right);
  }

  while (values[values.length - 1] === null) values.pop();
  return values;
}

console.log("제출 및 채점하기");

let passedCount = 0;

hiddenCases.forEach((values, index) => {
  const root = buildTree(values);
  const before = serializeTree(root);
  const expected = calculateDepth(root);
  const startedAt = process.hrtime.bigint();
  let passed = false;

  try {
    const actual = solution(root);
    passed =
      actual === expected &&
      JSON.stringify(serializeTree(root)) === JSON.stringify(before);
  } catch {
    passed = false;
  }

  const elapsed = Number(process.hrtime.bigint() - startedAt) / 1_000_000;
  if (passed) passedCount += 1;

  console.log(
    `테스트 ${String(index + 1).padStart(2, " ")}: ${passed ? "통과" : "실패"} (${elapsed.toFixed(2)}ms)`,
  );
});

console.log(`채점 결과: ${passedCount} / ${hiddenCases.length}`);

if (passedCount !== hiddenCases.length) process.exitCode = 1;
