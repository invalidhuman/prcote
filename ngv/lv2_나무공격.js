// Lv2_나무공격.js
// 나무 공격
// https://exam.hyundai-ngv.com/practice/9657

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const graph = input.slice(1, 1 + n).map((line) => line.split(" ").map(Number));

const [l1, r1] = input[n + 1].split(" ").map(Number);
const [l2, r2] = input[n + 2].split(" ").map(Number);

// const crims = [];
// for (let i = 0; i < n; i++) {
//   for (let j = 0; j < m; j++) {
//     if (graph[i][j] === 1) {
//       crims.push([i, j]);
//     }
//   }
// }

for (let i = l1 - 1; i < r1; i++) {
  for (let j = 0; j < m; j++) {
    if (graph[i][j] === 0) continue;

    graph[i][j] = 0;
    break;
  }
}

for (let i = l2 - 1; i < r2; i++) {
  for (let j = 0; j < m; j++) {
    if (graph[i][j] === 0) continue;
    graph[i][j] = 0;
    break;
  }
}

let count = 0;
// console.log(count);

for (let i = 0; i < n; i++) {
  // 행
  for (let j = 0; j < m; j++) {
    //열
    if (graph[i][j] == 1) {
      count++;
    }
  }
}

console.log(count);
