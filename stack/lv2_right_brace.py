# Lv2. 올바른 괄호

# https://school.programmers.co.kr/learn/courses/30/lessons/12909
def solution(s):
    
    stack = []
    
    for p in s:
        if p == '(':
            stack.append(p)
        else: 
            # ')'를 만났는데 stack에 아무것도 없으면 연결될 게 없다는 뜻
            if not stack:
                return False
            
            stack.pop() # stack에는 '('만 있으니 연결해서 닫아주는 의미

    return not stack # 반복문이 끝나고도 stack에 '('가 남아있다면 올바르지않음(False) / 비어있어야 (True)
    # if stack: 
    #     return False
    
    # return True


# 내 풀이
def solution2(s):
    
    s = list(s) # 결국엔 이걸 안써도 문자열은 for문에서 자동으로 한글자씩 순회해준다.
    
    stack = []
    
    for letter in s:
        if letter == '(':
            stack.append(letter)
        else:
            if stack:
                stack.pop()
            else:
                return False
    
    if stack:
        return False
            
    return True