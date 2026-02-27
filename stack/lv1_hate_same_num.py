# lv1 같은 숫자는 싫어   
# https://school.programmers.co.kr/learn/courses/30/lessons/12906  
    
# 정석 풀이 
'''
문제 의도 : "Top을 확인하라" 
전체 데이터를 다 볼 필요 없이, Top stack[-1]이 계속 변하니 이것만 확인해서 비교하면 된다.

'''
def solution(arr):
    stack = []
    
    for num in arr:
        # 1. 스택이 비어있거나, 현재 숫자가 스택의 마지막 숫자(Top)와 다를 때만 추가
        if not stack or num != stack[-1]: # -1을 이용하면 어차피 append만 되어왔으니 맨 뒤에 있는 인덱스와 비교할 수 있음. 게속 늘어나는 셈
            stack.append(num)
        
        # 스택 맨 뒤의 값이 지금 탐색 중인 숫자와 같으면 아무것도 하지 않음
            
    return stack

def solution2(arr):
    # answer = []
    
    # [1,1,3,3,0,1,1]
    # print(set(arr)) # {0,1,3}
    
    stack = []
    idx = 0
    
    for letter in arr:
        # answer 자체를 stack으로 쓰기
        if not stack:
            stack.append(letter)
            continue
        
        if letter == stack[idx]:
            continue
        else:
            stack.append(letter)
            idx+=1
        
        
    
    
    return stack