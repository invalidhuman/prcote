# https://school.programmers.co.kr/learn/courses/30/lessons/42840

def solution(answers):
    
    scores = [0,0,0]
    
    methods = [[1,2,3,4,5], [2,1,2,3,2,4,2,5],[3,3,1,1,2,2,4,4,5,5]]
    
    for i, answer in enumerate(answers):
            for idx, method in enumerate(methods):
                # 패턴이 다 달라서 나머지 연산
                if method[i % len(method)] == answer:
                    scores[idx] += 1
    
    # 0,5,1 개
    # 3등, 1등, 2등          
    
    max_score = max(scores)

    answer = []
    for i, score in enumerate(scores):
        if score == max_score:
            answer.append(i + 1)
    
    
    return answer