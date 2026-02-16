# 모범 담안
def solution2(lottos, win_nums):
    rank = [6,6,5,4,3,2,1]
    # 인덱스는 0,1,2,3,4,5,6

    cnt_0 = lottos.count(0)

    ans = 0

    for x in lottos:
        if x in win_nums:
            ans +=1

    return rank[cnt_0+ans],rank[ans]


# 내 풀이
def solution(lottos, win_nums):
    answer = [0,0]
    
    # 5위까지는 순위 + 일치하는 개수 = 7 성립
    # 1개일치 or 0개 일치 = 6위
    
    matchCnt = 0
    zeroCnt = 0

    for i in lottos:
        if i == 0:
            zeroCnt +=1
        elif i in win_nums:
            matchCnt +=1
    
    answer[0] = 6 if 7-zeroCnt-matchCnt > 6 else 7-zeroCnt-matchCnt 
    answer[1] = 6 if 7-matchCnt > 6 else 7-matchCnt
    
            
    
    return answer