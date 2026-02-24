# 땅따먹기 (lv.2)
# https://school.programmers.co.kr/learn/courses/30/lessons/12913

# 풀이 1 : "내가 이 칸에 도착했을 때의 최댓값" + 그냥 원래 있던 land 에 더하면서 풀기
def solution_v1(land):
    answer = 0

    for i in range(1, len(land)): # 1행 (두번째 행)부터
        land[i][0] += max(land[i-1][1],land[i-1][2],land[i-1][3])
        land[i][1] += max(land[i-1][0],land[i-1][2],land[i-1][3])
        land[i][2] += max(land[i-1][0],land[i-1][1],land[i-1][3])
        land[i][3] += max(land[i-1][0],land[i-1][1],land[i-1][2])
        
    answer = max(land[-1][0],land[-1][1],land[-1][2],land[-1][3])

    return answer 

# 풀이 2 : land에 더할 생각은 모샇ㅁ 
def solution_v2(land):
    answer = 0
    prev_max = land[0]

    for i in len(1,len(land)):
        prev_max[0] += max(land[i][1],land[i][2],land[i][3])
        prev_max[1] += max(land[i][0],land[i][2],land[i][3])
        prev_max[2] += max(land[i][0],land[i][1],land[i][3])
        prev_max[3] += max(land[i][0],land[i][1],land[i][2])

    answer = max(prev_max)


    return answer