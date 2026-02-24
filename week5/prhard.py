# 등굣길 (lv.3)
# https://school.programmers.co.kr/learn/courses/30/lessons/42898

# 모범 풀이. 1행을 유지하되 -1행 역할인 0행을 만듦
def solution_v1(m, n, puddles):
    map = [[0]*(m+1) for _ in range(n+1)] # 0행부터 'n'행 까지, 0열부터 'm'열 까지;

    for row in range(len(puddles)):
        puddles[row] = [puddles[row][1],puddles[row][0]]

    map[1][1]= 1

    for i in range(1,n+1):
        for j in range(1,m+1):

            if i == 1 and j ==1:
                continue

            if [i,j] in puddles:
                map[i][j] = 0
                continue
            
            map[i][j] = (map[i-1][j] + map[i][j-1]) % 1000000007
    


    return map[n][m]




# 내 풀이. 0행으로 푸는 법
def solution_v2(m, n, puddles):
    for row in range(len(puddles)):
        puddles[row] = [puddles[row][1],puddles[row][0]]
        puddles[row][0] = puddles[row][0]-1
        puddles[row][1] = puddles[row][1]-1

    map = [[0]*m for _ in range(n)]


    for i in range(0,n):
        for j in range(0,m):
            if i == 0 and j == 0:
                map[i][j] = 1
                continue
            
            if [i,j] in puddles:
                map[i][j] = 0
                continue
                
            up = map[i-1][j] if i>0 else 0
            left = map[i][j-1] if j>0 else 0
            
            map[i][j] = (up+left) % 1000000007

    return map[-1][-1]