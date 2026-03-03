# 2차원 배열 bfs 탐색
from itertools import combinations

inputs = [2,1,3,4,1]

def solution(numbers):
    answer = set()

    selects = list(combinations(numbers,2))

    for select in selects:
        (a,b) = select
        answer.add(a+b)

    return answer

print(solution(inputs))