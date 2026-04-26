// lv1_개표.js
// [한양대 HCPC 2023] 개표
// https://exam.hyundai-ngv.com/practice/7698
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

// 개표
// 한 표 나올 때마다 한 획
// 한표면 |
// 다섯표면 ++++ 5로 간다

// [3,12,1,5] <- ["3", "12", "1", "5"]
const result = input.map(Number);
// console.log(result);
const l = result[0];

for (let i = 1; i <= l; i++) {
  // result[1],[2],[3]
  let quotient = Math.floor(result[i] / 5);
  let remainder = result[i] % 5;
  // 몫 수만큼 ++++를 여러번
  // 나머지만큼 |를 마지막

  console.log("++++ ".repeat(quotient) + "|".repeat(remainder));
}
