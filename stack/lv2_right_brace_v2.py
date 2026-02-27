# Lv2. 올바른 괄호에서 괄호 종류를 늘림 () [] {}

# 원본 :  https://school.programmers.co.kr/learn/courses/30/lessons/12909
'''
여러 종류의 괄호((), {}, [])가 섞여도 문자열 s가 올바른 괄호가 되게 하라

(){[]} : 올바름
)({{}}) : 안올바름
(){[}]} : 안 올바름 
'''



def solution2(s):

    stack = []

    pairs = {')':'(','}':'{',']':'['}

    for char in s:
        if char in '({[': # if letter in pairs.values 
            stack.append(char)
        
        else:
            if not stack or pairs[char] != stack[-1]:
                return False

            stack.pop()
            # if pairs[char] == stack[-1]:
            #     stack.pop()

    return not stack