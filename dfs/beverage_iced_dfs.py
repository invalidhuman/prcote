# 이코테 149~151p
# https://yganalyst.github.io/training/algo_tr_ect_1/

# 세로 길이 : n 가로길이 : m
n,m = map(int,input().split())    

graph = []

# 2차원 배열 입력받기
# n번반복 : n개의 행 반복
for i in range(n):
    graph.append(list(map(int,input())))

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
        # 현재 위치에서 dfs 수행
        if dfs(i,j) == True:
            result+=1


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