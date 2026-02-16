# 옹알이 (2)
# https://school.programmers.co.kr/learn/courses/30/lessons/133499

# 연속해서 같은 발음을 할 수 없다.
# ayaaya -> 불가능 / ayayeaya -> 가능

def solution(babbling):
    answer = 0
    pron = ["aya", "ye", "woo", "ma"]

    for word in babbling:
        valid = True
       
        for i in pron:
            if i * 2 in word:  # "ayaaya" 확인
                valid = False
                break
        
        if not valid:
            continue
            
        for j in pron:
            word = word.replace(p, " ") # 발음 가능한 부분 -> 공백 
        
        if word.strip() == "":
            answer += 1
            
    return answer