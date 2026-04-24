// 구현 => 지나친 추상화 피하기(빠른 완성이 우)
// 큐 => 인덱스 포인터 우선 고려
// return 감각보다 stdin/stdout 감각 우선
// 샘플 통과 직후 바로 제출하지말고 직접 만든 반례 먼저 돌리기

// 반례 3개를 먼저 적고
// 샘플 통과 후 내가 만든 테스트 3개를 더 돌리고
// 틀렸으면 “놓친 반례가 뭐였는지”를 한 줄로 남기기

// 기본 입력 템플릿

// 한줄로 입력
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let line = 0;
const nextLine = () => input[line++];

const [N, M] = nextLine().split(" ").map(Number);
const arr = nextLine().split(" ").map(Number);

console.log(N, M);
console.log(arr);
