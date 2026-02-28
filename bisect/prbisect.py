def solution(budgets,M): 
    
    start = 0
    end = max(budgets)

    if sum(budgets) <= M:
        return max(budgets)

    while start <= end:
        mid = end // 2

        # mid를 상한선으로 했을 대의 합계를 예산과 비교해야함
        total = 0
        
        for b in budgets:
            if b > 
    
        


    return


'''
[120,110,140,150]
budget = 485
120 110 140 150
485


'''

budgets = []
M = 0


budgets = list(map(int,input().split()))
M = int(input())

print(budgets,M)
print(solution(budgets,M))