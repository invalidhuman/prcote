# 행s렬의 곱셈 (lv.2)

# https://school.programmers.co.kr/learn/courses/30/lessons/12949

def solution(arr1, arr2):
    answer = [[]]
    
    # m도 2이상
    # n도 2이상
    # 원소는 자연수\
    
    # m*p , p*n
    
    m = len(arr1)
    p = len(arr1[0])
    n = len(arr2[0])
    
    # for i in le
    
    return answer



arr1 = [[1, 4], [3, 2], [4, 1]]
arr2 = [[3, 3], [3, 3]]

m = len(arr1)
p = len(arr1[0])
n = len(arr2[0])

answer = [[0]*n for _ in range(m)]

# 두 개씩 탐색, arr1의 '행' -> arr2의 열
for i in range(m): # 3*2의 3
    # 0행 1열과 1행 0열
    # arr1은 열을 +, arr2 는 행을 +
    for j in range(n): # 2*2의 2
        # arr2의 1열 0행,1행 비교
        sum = 0
        for k in range(p): # 2개를 더함
            # 합산
            sum += (arr1[i][j] * arr2[j][i])
            # arr1[0][0] * arr2[0][0] + arr1[0][1] * arr2[1][0]
            # arr1[1][0] * arr2[0][0] + arr1[1][1] * arr2[1][0]
        
        answer[i][j] = sum

print(m,p,n)

