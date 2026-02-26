from collections import deque

# 1은 이동가능, 0은 벽
test_map = [
    [1, 0, 1],
    [1, 1, 1],
    [0, 0, 1]
]

def bfs(grid,start_x,start_y): # grid에 위 test_map이 들어옴
    # for i in range(4)로 dx[i],dy[i]를 돌면
    # 좌,우,상,하 좌표가 곧 (dx[i],dy[i])가 됨
    dx = [-1, 1, 0, 0] 
    dy = [0, 0, -1, 1]

    n = len(grid)
    m = len(grid[0]) 

    # queue 구현 및 시작점 위치를 queue에 입력
    queue = deque([(start_x,start_y)])

    while queue:
        x,y = queue.popleft()

        for i in range(4):
            # pop한 위치(x,y)에서 어디로 갈지
            nx = x + dx[i]
            ny = y + dy[i]

            if 0 <= nx < n and 0 <= ny < m and grid[nx][ny] == 1:
                # pop한 위치(x,y)에서 상,하,좌,우에 해당하는 위치가 길이고 범위를 안넘으면
                # grid 자체에 거리를 표시하고 있으니 1이라는 건 방문하지 않은 곳임을 뜻하기도함

                grid[nx][ny] = grid[x][y] + 1
                queue.append((nx,ny))

            
    return grid[n-1][m-1]

print(f"최단 거리 결과: {bfs(test_map, 0, 0)}")