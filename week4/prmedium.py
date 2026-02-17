# https://school.programmers.co.kr/learn/courses/30/lessons/42840

def solution(answers):
    
    scores = [0,0,0]
    
    methods = [[1,2,3,4,5], [2,1,2,3,2,4,2,5],[3,3,1,1,2,2,4,4,5,5]]
    
    for i in range(len(answers)):
        for sheet in methods:
            if sheet[i] == answers[i]:
                scores[i] += 1
    
    # 0,5,1 개
    # 3등, 1등, 2등          
    
    # sorted_scores = sorted(scores,reverse=True)
    sorted_scores = sorted(scores, reverse=True)
    # [5,1,0]

    rank = []

    # for item in sorted_scores:
    #     rank[scores.index(item)] = 1

    for i in range(len(scores)):
        rank[scores.index(sorted_scores[i])] = i+1

    # [3,1,2]
    
    answer = rank.index(min(rank))+1
    
    
    
    return answer

# num1 = [1,2,3,4,5]

answers = [1,1,3,5,5]
print(answers.index(max(answers)))