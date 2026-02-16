# Lv2. 괄호회전하기 https://school.programmers.co.kr/learn/courses/30/lessons/76502

s = "[)(]"
length = len(s)

# 올바른 괄호의 기본형들을 roots 리스트에 저장
roots = ["()", "[]", "{}"]
x = 0

# 다 지워지는 게 먼저일까
# 3개를 다 검사하는 게 먼저일까

# 지금 상태에서 {} 가 있는 걸 다 검사해도 다음 차례에 다른 게 지워지고 난 뒤에 {}가 또 생길 수도 있다.
# 즉, s에 현재 존재하는 '기본형' 괄호가 다 지워지기 전까지는 계속 3가지를 다 검사해야함

shifted = s

for _ in range(len(s)):
    # if any(root in s for root in roots):
    while any(root in shifted for root in roots):
        for i in range(3):  
            if roots[i] in shifted: 
                shifted = shifted.replace(roots[i],"")                
                print("shifted:",shifted)

    if len(shifted) == 0:
        x +=1

    s = s[1:]+s[0]
    shifted = s
    print(shifted)

print(x)