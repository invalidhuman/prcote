# 이코테 149~151p
# https://yganalyst.github.io/training/algo_tr_ect_1/
# bfs라서 queue

from collections import deque

n,m = map(int,input().split())    

# graph = []
# for i in range(n):
    # graph.append(list(map(int,input())))
graph = [list(map(int,input())) for _ in range(n)]

# 상, 하, 좌, 우 방향 벡터 정의
dx = [-1,1,0,0]
dy = [0,0,-1,1]

# 재귀를 쓰지 않으니, 큐와 반복을 이용해서 방문처리를 해야함
def bfs(start_x,start_y): # 재귀 아니니까 (x,y) 가 아니라 start를 지정. 
    
    # 1. 시작점이 이미 방문했거나(1) 벽(1)인 경우, 새로운 아이스크림을 만들 수 없으니 바로 False
    if graph[start_x][start_y] == 1:
        return False

    # 2. 새로운 덩어리를 발견했으므로 큐를 생성하고 시작 지점 방문 처리
    queue = deque([(start_x,start_y)]) # 시작지점 좌표?를 큐에 넣고 시작
    graph[start_x][start_y] = 1 # 방문한 칸은 벽(1)과 동일하게 취급하여 재방문 방지

    # 이 반복문은 위 줄에서 발견한 새로운 덩어리 시작점에 연결된 모든 노드를 True 반환없이 1로 만들어버리기 위해 queue에 넣는다.
    # bfs함수를 새로 실행하지 않고 queue에 넣는다는 것이 곧 더 이상의 True 반환없이( 더 이상의 result +=1없이) 방문처리를 하는 것이기 때문
    while queue: # queue가 없어질 때까지
        x, y = queue.popleft() # queue에서 하나 빼기

        # 3. 현재 위치에서 인접한 4방향을 검사
        for i in range(4):
            nx = x + dx[i]
            ny = y + dy[i]

            # 4. 맵 범위 내부이며, 아직 방문하지 않은 빈 공간(0)인 경우에만 탐색 확장
            if (0 <= nx < n and 0 <= ny <m and graph[nx][ny] == 0):
                # 5. 발견 즉시 방문 처리: 큐에 중복으로 들어가는 것을 방지 (메모리 최적화)
                graph[nx][ny] = 1
                queue.append((nx,ny))

                # 방문처리한걸 queue에 넣는건, 계속해서
                # 1. queue에서 빼고, 벽이나 방문한 앤지 확인 -> False
                # 2. 방문안한애만 True가 나옴
                # 연결된 것과 처음 검사한 것에서 True를 반환하면서 result에 1을 올리고, 
                # #나머지는 또 True를 반환할일이없게 미리 for문에서 1을 박아버리는 것
                
    # 한 번이라도 새로운 빈 공간(0)에서 탐색을 시작했다면 하나의 덩어리가 완성된 것임
    # 즉, 온전한 아이스크림인지 검증할 필요없이, 그냥 발견했으면 True
    return True


def dfs(x,y): # 재귀. # dfs라는 함수는 하나의 아이스크림을 완성하는 
    if not (0 <= x < n and 0 <= y < m):
        return False
    
    if graph[x][y] == 0:
        graph[x][y] = 1
        dfs(x-1,y)
        dfs(x+1,y)
        dfs(x,y-1)
        dfs(x,y+1)
        return True

    return False


result = 0

for i in range(n):
    for j in range(m):
        # 새로운 아이스크림을 하나 찾음
        if bfs(i,j) == True:
            result+=1

        # if dfs(i,j) == True:
        #     result+=1


print(result)


# dx = [-1,1,0,0]
# dy = [0,0,-1,1]

# 0,1,2,3 순서대로 좌,우,상,하
# 햔번에 만들 수 있는 아이스크림의 총 개수 를 구하기
# 연결 되있는지 어떻게 알까?
# i j 기준으로 
# 출발지가 0일 때
# 오른쪽과 아래만 확인 d[1] d[3]만
# 
# 


'''
입력 예시 
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
'''
출력예시
8
'''