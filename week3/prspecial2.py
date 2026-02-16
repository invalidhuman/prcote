# Lv2. 괄호회전하기 https://school.programmers.co.kr/learn/courses/30/lessons/76502

def is_right(s): # 올바른 괄호인지 검사하는 함수
    pair = {"(":")", "{":"}", "[":"]"}
    stack = []
    # "{[]}[]" "{[()]}"
	# 검사했는데 왼쪽 괄호면 스택에 넣고, 오른쪽 괄호면 이전에 스택에 같은 종류의 왼쪽괄호가 있었는지 검사한다.
	# 스택에는 왼쪽 괄호만 들어오는데, 
	# 스택에 가장 최근에 들어온 왼쪽 괄호와 현재 걸린 오른쪽 괄호와 같은 종류여야 올바른 괄호이기 때문.
    
    for char in s:
    	if char in "({[":
            stack.append(char)
        else: # elif char in ")}]"
            if (len(stack) == 0 or pair[stack[-1]] != char):
                return False
            stack.pop()
    
    return len(stack) == 0
	

def solution(s): # is_right을 불러와서 검사하는 과정을 매번 한칸씩 이동하는 리스트마다 수행한다.
	answer = 0
	
	for i in range(len(s)):
		# i를 늘어나게 슬라이싱해서 한칸씩 왼쪽으로 이동시키며 검사한다. (한칸 이동할 대마다 한 칸 오른쪽에 있는 원소로 시작하는 리스트가 된다.)
		shifted = s[i:]+s[:i] # i = 3 이면 [3:] 는 3,4,5,6을, [:3]는 0,1,2을 뜻함
		if is_right(shifted):
				answer +=1
	
	return answer

def is_right(s):

    root = {'(':')',"{":"}","[":"]"}
    stack = []

    for char in s:
        if char in "({[":
            stack.append(char)
        elif char in ")}]":
            if len(stack) == 0:
                return False

            if root[stack[-1]] == char:
                stack.pop()
            else:
                return False

    return len(stack) == 0


def solution(s):
    xCnt = 0
    for i in range(len(s)):
        shifted = s[i:]+s[i:]
        if is_right(shifted):
            xCnt +=1
    
    return xCnt


print(solution("{}()[]"))