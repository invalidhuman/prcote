# (이분탐색) 배열에서 숫자를 찾기 -> 조건 달린 최댓값/최솟값 찾기
# 그러면서 어느 지점을 기준으로 결과가 Yes 에서 No로 바뀌는 구조
# 이 문제는
# '총합을 넘지 않는 최댓값' 찾기 + 상한액(answer)에 따라 예산(M) 초과인지 아닌지 나뉨

def solution(budgets,M): # 배열, 총 에산 # return 배정가능한 최대 상한애 
    answer = 0
    start = 0
    end = max(budgets)

    if sum(budgets) <= M:
        return max(budgets)

    # 상한액 정하기

    while start <=end:
        mid = (start + end) // 2 # 상한액

        # mid가 상한액이 될 수 있는 지 확인 (상한액이 mid일대 sumBudget이 M을 안넘는가)
        total = 0
        for b in budgets:
            # 큰 거를 파악해서 그것만 더 낮추겠다
            if b > mid:
                total += mid
            else:
                total += b

        if total > M:
            end = mid -1 # 이미 절반을 줄인 mid 바로 앞으로 함으로써 mid를 반정도씩 줄여보자
        else: # total <= M
            answer = mid
            start = mid + 1

        # 더 낮다고 해서 바로바로 답이 나오는 게 아니라, 반 씩 줄여가면서 최선을 찾기

    return answer


'''
[120,110,140,150]
budget = 485

'''

budgets = []
M = 0


budgets = list(map(int,input().split()))
M = int(input())

print(budgets,M)
print(solution(budgets,M))