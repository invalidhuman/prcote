// 백준 14502
// https://www.acmicpc.net/problem/14502

// const fs = require("fs");
// const input = fs
//   .readFileSync((process.platform = "linux" ? "/dev/stdin" : "./input.txt"))
//   .toString()
//   .trim()
//   .spolit(" ")
//   .map(Number);

// const [n, m] = input[0].split(" ").map(Number);

// const graph = input.slice(1).map((line) => line.split(" ").map(Number));

// 목적 : 안전 영역 크기 구하기
// 0 : 빈칸
// 1 : 벽
// 2 : 바이러스
// 둘다 못지나가긴하는데, 벽을 세우어야 바이러스가 빈칸으로 퍼져나가는 걸 막음
// 벽을 3개 세운 뒤, 바이러스가 퍼질 수 없는 곳을 안전영역 => 안전 영역 크기 구하기
function solution(n, m, graph) {
  // 1. 벽 세우기 (3중 for문) -> 3번정도는 괜찮음. 넘으면 : ?

  // 1-1. 빈칸과 바이러스의 위치 저장
  var empty = [];
  var virus = [];

  // 0인 칸과 virus가 있던 칸을 미리 조사해서 복사해두기
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (graph[i][j] == 0) empty.push([i, j]);
      if (graph[i][j] == 2) virus.push([i, j]);
    }
  }

  var l = empty.length; // 빈 좌표 배열의 길이 : l

  var maxSafe = 0; // 안전영역의 면적을 매번 비교

  // 1-2. 벽이 될 경우의 수
  // 벽 3개는 다 구분되지 않는 벽이라(같은 벽이라) i < j < k 조건으로 조합만 뽑는다.
  // i를 고른 뒤
  // j는 i 다음부터 고르고
  // k는 j 다음부터 고른다

  //   i = l-2일때는 l-1과 l자리만 남으므로 각각이 j,k가 됨
  // i = 0이면 j = 1과 그 이후만 가능, i = 1이면 j = 2~
  // 마찬가지로 k도 2와 그 이후만 가능.
  for (let i = 0; i < l - 2; i++) {
    // l 은 empty의 길이 => 0인 칸만 가지고 i,j,k를 고름
    for (let j = i + 1; j < l - 1; j++) {
      for (let k = j + 1; k < l; k++) {
        // 매번 다른 벽에 대해 새로운 그래프 복사본 만들기
        const tempGraph = graph.map((row) => [...row]);

        // 1-3. 벽 세우기 (빈칸중에 골라서 그래프의 복사본에 1로 채워넣는다.)
        // tempGraph[empty[i][0]][empty[i][1]] = 1;
        // tempGraph[empty[j][0]][empty[j][1]] = 1;
        // tempGraph[empty[k][0]][empty[k][1]] = 1;

        // 이렇게도 가능
        const [x1, y1] = empty[i];
        const [x2, y2] = empty[j];
        const [x3, y3] = empty[k];

        tempGraph[x1][y1] = 1;
        tempGraph[x2][y2] = 1;
        tempGraph[x3][y3] = 1;

        // 2. 바이러스 퍼트리기
        // i,j는 빈칸이니 i,j로 for문 만들면 안되고 이미 만들어둔 virus 배열 사용
        for (const [x, y] of virus) {
          dfs(x, y, tempGraph);
        }

        // 3. 안전영역 + max 따져보기
        let count = 0;

        for (let i = 0; i < n; i++) {
          for (let j = 0; j < m; j++) {
            if (tempGraph[i][j] === 0) {
              count++;
            }
          }
        }

        maxSafe = Math.max(maxSafe, count);
      }
    }
  }

  return maxSafe;

  function dfs(x, y, map) {
    const dx = [-1, 1, 0, 0];
    const dy = [0, 0, -1, 1];

    for (let dir = 0; dir < 4; dir++) {
      let = nx = x + dx[dir];
      let = ny = y + dy[dir];

      if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue;
      if (map[nx][ny] != 0) continue;

      map[nx][ny] = 2;
      dfs(nx, ny, map);
    }
  }
}
