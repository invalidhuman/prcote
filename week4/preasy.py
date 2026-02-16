# 7의개수 (lv.0)

# https://school.programmers.co.kr/learn/courses/30/lessons/120912

def solution(array):
    answer = 0
    
    word = ''
    
    for num in array:
        word = word + str(num)

    print(word)
    answer = word.count('7')
    
    return answer

# print(solution([7, 77, 17]))
# print(solution([10, 29, ]))
# print(solution([10, 29, 70]))
# print(solution([10, 29, 70]))

def solution2(array):
    print(type(array[0]))
    array = str(array)
    print(type(array[0]))

    return str(array)

print(solution2([10, 29, 70]))
