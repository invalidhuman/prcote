# lv2. 괄호 회전하기

# https://school.programmers.co.kr/learn/courses/30/lessons/76502

def is_right(s): # 올바른 괄호인지 검사하는 함수
    pair = {"(": ")", "{": "}", "[": "]"}
    stack = []
    
    # 검사했는데 왼쪽 괄호면 스택에 넣고, 오른쪽 괄호면 이전에 스택에 같은 종류의 왼쪽괄호가 있었는지 검사한다.
    for char in s:
        if char in "({[": # pair.keys() 혹은 pair를 거꾸로하고 char in pair.values(): 해도됨. 
            stack.append(char)
        else: # 오른쪽 괄호인 경우
            # 스택이 비어있거나 짝이 맞지 않으면 False
            if not stack or pair[stack[-1]] != char: # pair를 거꾸로하면 pair[char] != stack[-1]
                return False
            stack.pop()
            
    return not stack

def solution(s): # is_right을 불러와서 검사하는 과정을 매번 한칸씩 이동하는 리스트마다 수행한다.
    answer = 0
    for _ in range(len(s)):
            s = s[1:] + s[:1] # 왼쪽으로 한 칸 회전
            if is_right(s):
                answer += 1
    return answer