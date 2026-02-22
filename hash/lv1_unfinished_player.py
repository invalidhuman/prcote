# Lv.1
# 문제 링크: https://school.programmers.co.kr/learn/courses/30/lessons/42576

"""
[문제 요약]
- 마라톤 참가자 명단(participant)과 완주자 명단(completion)이 주어짐
- 단 한 명의 선수를 제외하고는 모든 선수가 완주함
- 완주하지 못한 선수의 이름을 반환하라 (동명이인 주의)

[풀이 1] 해시 테이블(Dictionary) 활용 - 권장 풀이
- 시간 복잡도: O(N)
- 특징: 딕셔너리를 이용해 빈도수를 계산함. 가장 정석적인 해시 문제 접근법.
"""
def solution_v1(participant, completion):
    counts = {}
    
    # 참가자 명단 카운팅
    for name in participant:
        counts[name] = counts.get(name, 0) + 1
        
    # 완주자 명단에서 차감
    for name in completion:
        counts[name] -= 1
        
    # 남은 인원이 0이 아닌 사람 반환
    for name, count in counts.items():
        if count > 0:
            return name

"""
[풀이 2] 정렬(Sorting) 활용
- 시간 복잡도: O(N log N)
- 특징: 해시를 사용하지 않고 두 배열을 정렬한 뒤 인덱스를 비교함.
"""
def solution_v2(participant, completion):
    participant.sort()
    completion.sort()
    
    # 두 배열을 동시에 돌며 이름이 다른 지점 찾기
    for p, c in zip(participant, completion):
        if p != c:
            return p
            
    # 끝까지 다 같으면 참가자의 마지막 인원이 정답
    return participant[-1]

"""
[풀이 3] collections.Counter 활용 - Pythonic
- 시간 복잡도: O(N)
- 특징: 객체 간 뺄셈 기능을 지원하는 Counter를 이용해 매우 간결하게 작성.
동작원리 
- `A - B` 연산 시, 결과값의 빈도가 0 이하가 되는 요소는 결과 객체에서 자동으로 삭제됩
- 단순히 키가 빠지는 것이 아니라 각 키에 대응하는 빈도수(Value)를 뺍니다.

"""
from collections import Counter

def solution_v3(participant, completion):
    # 1. Counter 객체 생성 및 뺄셈 연산
    answer = Counter(participant) - Counter(completion)
    
    # 2. 결과 딕셔너리의 키들 중 첫 번째를 반환
    return list(answer.keys())[0]