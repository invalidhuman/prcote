# JadenCase 문자열 만들기
# https://school.programmers.co.kr/learn/courses/30/lessons/12951

def solution(s):
    words = s.split(' ')
    answer = []

    for word in words:
        # 공백이 만약에 연속으로 들어있다면 split(' ')만으로는 분리되지않고 공백인 문자열이 생기게 된다.
        # ex. Hello  Word -> ['Hello', '', 'Word']
        # if word == '':
        #     answer.append('')
        #     continue

        new_word = word[0].upper() + word[1:].lower()
        answer.append(new_word)
    
    return ' '.join(answer)

print(solution("hello world"))