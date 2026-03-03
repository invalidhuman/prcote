/**
 * @param {Object} graph - 인접 리스트 형태의 그래프
 * @param {number|string} startNode - 시작 노드
 * @param {Array} visited - 방문 여부를 체크할 배열
 */
function dfs(graph, v, visited) {
  // 1. 현재 노드를 방문 처리
  visited[v] = true;
  console.log(v); // 방문 노드 출력

  // 2. 현재 노드와 연결된 다른 노드를 재귀적으로 방문
  // graph[v]가 배열이므로 for...of나 forEach 사용 가능
  if (graph[v]) {
    graph[v].forEach((neighbor) => {
      if (!visited[neighbor]) {
        dfs(graph, neighbor, visited);
      }
    });
  }
}

// 그래프 예시 (인접 리스트)
const graph = {
  1: [2, 3, 8],
  2: [1, 7],
  3: [1, 4, 5],
  4: [3, 5],
  5: [3, 4],
  7: [2],
  8: [1],
};

// 방문 여부를 저장할 배열 (노드 번호가 1부터 시작하므로 크기를 9로 설정)
const visited = Array(9).fill(false);

// DFS 실행
dfs(graph, 1, visited);
