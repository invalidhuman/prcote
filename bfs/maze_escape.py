n, m = map(int,input().split())
map = [list(map(int,input()))for _ in range(n)]

from collections import deque
'''
1,1에서 출발
출구는 n,m
101010
111111
000001
111111
111111
'''


dx = [-1,1,0,0]
dy = [0,0,-1,1]

queue = deque([(0,0)])


def bfs(x,y):
    # queue = deque()
    # queue.append((x,y))

    while queue:
        x,y = queue.popleft()            

        if x == n-1 and y == m-1:
            print(map[x][y])
        

        for i in range(4):
            nx = x + dx[i]
            ny = y + dy[i]

            if 0 <= nx < n and 0 <= ny < m and map[nx][ny] == 1:
                map[nx][ny] = map[x][y] + 1
                queue.append((nx,ny))

    return map[n-1][m-1]

print(bfs(0,0))