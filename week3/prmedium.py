def solution(cards1, cards2, goal):
    answer = "Yes"
        
    # 나한테 모든테스트케이스에 대한 goal이 공개되지 않으니 예시를 잘 확인
    # 순서를 바꿔서 사용할 수 없다.
    # 각 cards에 대한 현재까지 사용한 단어의 인덱스를 기록할 필요
    index1 = 0
    index2 = 0

    for word in goal:
        if index1 < len(cards1) and word == cards1[index1]:
            index1+=1
        elif index2 < len(cards2) and word == cards2[index2]:
            index2+=1
        else:
            answer = "No"
            break

    return answer

cards1 = ["i", "water", "drink"]	
cards2 = ["want", "to"]
goal = ["i", "want", "to", "drink", "water"]

answer = "Yes"
    
# 나한테 goal을 공개하진 않는 것으로 보임
# 순서를 바꿔서 사용할 수 없다.
# 각 cards에 대한 현재까지 사용한 인덱스를 기록할 필요
index1 = 0 # 1
index2 = 0

for word in goal:
    if index1 < len(cards1) and word == cards1[index1]:
        index1+=1
    elif index2 < len(cards2) and word == cards2[index2]:
        index2+=1
    else:
        answer = "No"
        break

print(answer)