# lv2 기능개발 (스택/큐 중 큐)
# https://school.programmers.co.kr/learn/courses/30/lessons/42586

from collections import deque
import math

def solution(progresses, speeds):
    answer = []
    
    n = len(progresses)
    
    #1. 일수 계산해서 queue에 저장 
    queue = deque([math.ceil((100-p)/s) for p,s in zip(progresses,speeds)])
    
    
    # 빌 때까지
    while queue:
        current = queue.popleft()
        count =1 # result 초기화
        
        while queue and queue[0] <= current: # 하다가도 queue가 빌 수 있음 
            queue.popleft()
            count +=1
    
        answer.append(count)
    
    return answer