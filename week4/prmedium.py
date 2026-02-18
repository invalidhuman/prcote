# https://school.programmers.co.kr/learn/courses/30/lessons/42840

def solution(answers):
    
    scores = [0,0,0]
    
    methods = [[1,2,3,4,5], [2,1,2,3,2,4,2,5],[3,3,1,1,2,2,4,4,5,5]]
    
    for i, answer in enumerate(answers):
            for idx, method in enumerate(methods):
                # 나머지 연산자로 패턴 반복 처리
                if method[i % len(method)] == answer:
                    scores[idx] += 1
    
    # 0,5,1 개
    # 3등, 1등, 2등          
    
    # sorted_scores = sorted(scores,reverse=True)
    max_score = max(scores)
    # scores = [0,5,1] 점
    # sorted_scores = [5,1,0] 점

    # scores = [0,5,5] 점
    # sorted_scores = [5,5,0] 점

    rank = []

    # for item in sorted_scores:
    #     rank[scores.index(item)] = 1

    for i in range(len(scores)):
        rank[scores.index(sorted_scores[i])] = i+1

    # rank = [3,1,2]

    winner = 0
    answer = []

    for i in rank:
        if i == min(rank):
            answer.append(i+1) 
    
    # answer = rank.index(min(rank))+1
    
    
    
    return answer

# num1 = [1,2,3,4,5]

answers = [1,1,3,5,5]
print(answers.index(max(answers)))