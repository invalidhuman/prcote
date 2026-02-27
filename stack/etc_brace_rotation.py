# lv2. 괄호 회전하기
# https://school.programmers.co.kr/learn/courses/30/lessons/76502

# 사용자 정의 함수는 그대로 두고, main함수에서 회전하는 과정에서 immutable 객체인 문자열이 계속 생성되는 걸 방지하는 로직을 추가로 구현

from collections import deque

def is_right(s): # 올바른 괄호인지 검사하는 함수
    pair = {"(": ")", "{": "}", "[": "]"}
    stack = []
    
    # 검사했는데 왼쪽 괄호면 스택에 넣고, 오른쪽 괄호면 이전에 스택에 같은 종류의 왼쪽괄호가 있었는지 검사한다.
    for char in s:
        if char in "({[": # char in pair.values(): 
            stack.append(char)
        else: # 오른쪽 괄호인 경우
            # 스택이 비어있거나 짝이 맞지 않으면 False
            if not stack or pair[stack[-1]] != char:
                return False
            stack.pop()
            
    return len(stack) == 0

def solution(s): # is_right을 불러와서 검사하는 과정을 매번 한칸씩 이동하는 리스트마다 수행한다.
    answer = 0

    d = deque(s) # 문자열을 deque 객체로 변환

    for _ in range(len(s)):
        # i를 늘려가며 슬라이싱해서 한칸씩 왼쪽으로 이동시킨다.
        if is_right(d): # "".join(d) 로 문자열로 다시 합쳐도되지만 이걸 하는데에 또 O(N)
            answer += 1

        # rotate(-1)은 왼쪽으로 1칸 회전 (s[1:] + s[:1]과 동일 효과)
        # 새로운 객체를 생성하지 않고 내부 데이터 위치만 조정. O(1)
        d.rotate(-1)
    return answer