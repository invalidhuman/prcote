def solution2(triangle):
    
    # prev_max = triangle[0][0]

    for i in range(len(triangle), -1, -1):
        for j in range(len(triangle[i])):
            triangle[i][j] += max(triangle[i+1][j], triangle[i+1][j+1])

    

def solution(triangle):
    y = len(triangle)
    x = len(triangle[-1])
    dp = [[0 for _ in range(x+1)] for _ in range(y)]
    dp[0][1] = triangle[0][0]
    for i in range(1, y):
        for j in range(1,len(triangle[i]) + 1):
            dp[i][j] = triangle[i][j-1] + max(dp[i-1][j], dp[i-1][j-1])
    return max(dp[-1])

print(solution([[7], [3, 8], [8, 1, 0], [2, 7, 4, 4], [4, 5, 2, 6, 5]]))