// 이코테 149~151p
// https://yganalyst.github.io/training/algo_tr_ect_1/

// const visited = Array(7).fill(false)
// const visited = Array.from({length:n}, ()=>Array(m).fill(false))

function solution2(n, m, graph) {
  let count = 0; // 아이스크림 개수

  function dfs(x, y) {
    if (x < 0 || x >= n || y < 0 || y >= m) {
      return false;
    }

    if (graph[x][y] == 0) {
      // 그 dfs 안에서 연결된 0들은 전부 1로 바뀜
      // 그래서 같은 덩어리는 다시 count되지 않음
      graph[x][y] = 1;

      dfs(x - 1, y); // 재귀로 부른 dfs에서도 true가 나올 수도 있겠지만, dfs 바깥 for문에서 부른 dfs의 결과만 count에 영향.
      dfs(x + 1, y); // 즉, 연결된 아이스크림을 구성하는 노드를 모두 탐색할 때까지는 count가 올라가지않고,
      dfs(x, y - 1); // 끊겼다가 다시 탐색해야 그때부터 count가 올라간다.
      dfs(x, y + 1);

      return true;
    }

    return false; //main에서 불러냈을 때 1인 칸이면 무조건 false
  }

  // for문에서 처음 만난 0 하나가 새로운 덩어리의 시작점이면 count++
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (dfs(i, j) == true) count++;
    }
  }

  return count;
}

function solution(n, m, graph) {
  let count = 0;

  function dfs(x, y) {
    if (x < 0 || x >= n || y < 0 || y >= m) {
      return false;
    }

    // 칸막이도 1이지만, 방문한 것도 1로 만들기.
    if (graph[x][y] === 0) {
      // 방문안했고 칸막이도 아니라면
      graph[x][y] = 1;

      dfs(x - 1, y);
      dfs(x + 1, y);
      dfs(x, y - 1);
      dfs(x, y + 1);

      return true;
    }

    return false;
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (dfs(i, j) === true) {
        count++;
      }
    }
  }

  return count;
}

const n = 4;
const m = 5;

const graph = [
  [0, 0, 1, 1, 0],
  [0, 0, 0, 1, 1],
  [1, 1, 1, 1, 1],
  [0, 0, 0, 0, 0],
];

// console.log(solution(n, m, graph));
console.log(solution2(n, m, graph));
// 최초의 진입점만 count를 반환하는 게 핵심
// 재귀함수는 여러번 실행되지만,
// if (dfs(i,j)=== true) 조건문에 걸리는 것은 그 덩어리의 첫 번째 뿐이다.
// 왜냐하면 dfs가 실행되자마자 그 좌표는 1이되고 내부 재귀의 true는 무시되기 때문이다.
// main함수에서 dfs(0,0)을 호출하고 이 때만 count++를 하니까,
// (0,0)의 상하좌우를 탐색하며 dfs(0,1), dfs(1,0)에서 true 를 리턴해도 dfs(0,0)의 내부 코드로 돌아갈 뿐이다.
// 영향은 graph에만 줄 뿐, main 함수의 count에는 전달하지않는다.

function solution_area(n, m, graph) {
  let totalArea = 0;

  function dfs(x, y) {
    if (x < 0 || x >= n || y < 0 || y >= m) {
      return 0;
    }

    let area = 0;

    if (graph[x][y] === 0) {
      graph[x][y] = 1;

      area = 1;

      area += dfs(x - 1, y);
      area += dfs(x + 1, y);
      area += dfs(x, y - 1);
      area += dfs(x, y + 1);
    }

    return area;
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      totalArea += dfs(i, j);
    }
  }

  return totalArea;
}
