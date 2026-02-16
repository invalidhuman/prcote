def solution(number, k):
    # number = str(1231234)
    # k : 몇개뺄지
    # 순서를 바꾸지 않으면서 몇가지를 빼야함 

    stack = []

    for num in number:
        if len(stack) > 0 and num > stack[-1]:
            stack.pop()
            k-=1
        stack.append(num)

  
    return str(stack)

    # [1, 2, 3, 1, 2, 3, 4]
    # [0, 0, 0, 0, 0, 0, 0]
    # [0, 0, 0, 0, 0, 0, 0]




