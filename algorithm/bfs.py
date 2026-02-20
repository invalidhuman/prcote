from collections import deque

def bfs(graph,start,visited):
    queue = deque([start])

    visited[start] = True

    while queue: # queue에 원소가 있을 때 
        # 큐에서 하나의 원소를 뽑아 출력
        v = queue.popleft()
        print(v,end=' ')

        # 해당 원소와 연결된, 아직 방문하지 않은 원소들을 큐에 삽입
        for i in graph[v]:
            if not visited[i]:
                queue.append(i)
                visited[i]=True

graph = [
    []
]

visited = [False]*9

bfs(graph, 1, visited)




# def bfs(grid,n,m):
#     # 상하 좌우 방향벡터
#     dx = [-1,1,0,0]

#     # 시작점 (0,0)을 큐에 넣고 방문처리
#     queue = deque([(0,0)])

#     visited = [[False] * m for _ in range(n)]
#     visited[0][0] = True

#     while queue:
#         x,y = queue.popleft()

#         # 현재 위치에서 4방향 확인
#         for i in range(4):
#             nx = x + dx[i]
#             ny = y + dy[i]

#             # 지도 범위를 벗어나지 X & 처음 방문하는 곳 & 갈 수 있는 길인 경우 (1)

#     return dx