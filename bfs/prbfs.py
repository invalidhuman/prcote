'''
15 14
00000111100000
11111101111110
11011101101110
11011101100000
11011111111111
11011111111100
11000000011111
01111111111111
00000000011111
01111111111000
00011111111000
00000001111000
11111111110011
11100011111111
11100011111111
'''

from collections import deque

n , m = map(int,input().split())
# graph = [map(int,input().split()) for _ in range(n)]
graph = [list(map(int,input())) for _ in range(n)] # m은 맞춰서 입력값으로 정확하게 주어짐


def bfs(start_x,start_y):
    
    # 반복하기 전에 지나칠 거 : queue에 들어갈 필요도없는 이미 1인 노드
    if graph[start_x][start_y] == 1:
        return False
    # 이 if문을 적음으로써, 결국 queue에 들어가기 시작하는건 새로운 아이스크림을 발견한 노드일 때만이 된다.
    

    # 방향벡터
    dx = [-1,1,0,0]
    dy = [0,0,-1,1]

    queue = deque([(start_x,start_y)])
    graph[start_x][start_y] = 1

    while queue: # queue에 있는 게 다 없어질 때까지 함수는 끝나지 않음
        # queue에 있는 게 다 없어지는 조건 : 아이스크림 덩어리 전부 방문처리 => 다시 bfs를 실행해도 1로 끝나도록

        # 처음엔 이 함수가 실행되면서 queue에 들어간 시작점 노드를 빼서 주변을 검사하지만,
        # 그 뒤로 계속 인접노드를 검사해서 queue에 넣음으로써 주변이 1밖에안남을 때까지, 즉 queue에 넣은 게 없을 때까지 검사
        # 갈수록 주변에 1밖에 안남으면서 마지막엔 queue에 본인이 1인 것들만 남아서 빠지기만하다가 queue에 아무것도 없게 된다.
        x,y = queue.popleft()

        for i in range(4):
            nx = x + dx[i]
            ny = y + dy[i]

            if 0 <= nx < n and 0 <= ny < m and graph[nx][ny] == 0:
                graph[nx][ny] = 1
                queue.append((nx,ny))

    return True


result = 0


for i in range(n):
    for j in range(m):
        # 새로운 아이스크림 덩어리 방문시
        if (bfs(i,j) == True):
            result +=1


print(result)