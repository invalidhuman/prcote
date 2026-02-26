# lv2
# https://school.programmers.co.kr/learn/courses/30/lessons/1844

from collections import deque

maps = [[1, 0, 1, 1, 1], [1, 0, 1, 0, 1], [1, 0, 1, 1, 1], [1, 1, 1, 0, 1], [0, 0, 0, 0, 1]]

def solution(maps):    
    queue = deque([(0,0)])
    
    dx = [-1,1,0,0]
    dy = [0,0,-1,1]
    
    n = len(maps)
    m = len(maps[0])
    
    while queue:
        x,y = queue.popleft()
        
        if (x,y) == (n-1,m-1):
            return maps[x][y]
        
        for i in range(4):
            nx = x + dx[i]
            ny = y + dy[i]
            
            if 0 <= nx < n and 0 <= ny < m and maps[nx][ny] == 1:
                maps[nx][ny] = maps[x][y] + 1
                queue.append((nx,ny))
        maps[x][y] = 0
    
    
    return -1

print(solution(maps))