def solution(line):



    # 입력 [A,B,C]의 리스트에서 직선 2개씩을 비교해 교점을 알 방법 -> for문
    # 발생한 교점들의 x,y좌표가 둘다 정수인것만 추출
    # 그걸 좌표계에 나타내어 x,y좌표의 음수, 양수를 가장 절댓값이 큰 것들을 찾아내어 캔버스의 형태(이중리스트)를 구현
    
    answer = []

    return answer

# line = [[2, -1, 4], [-2, -1, 4], [0, -1, 1], [5, -8, -12], [5, 8, 12]]
# line = [[0, 1, -1], [1, 0, -1], [1, 0, 1]]
# line = [[1, -1, 0], [2, -1, 0]]
line = [[1, -1, 0], [2, -1, 0], [4, -1, 0]]

cross = []

answer = []

# range(5 ) == range(0,5) -> 0,1,2,3,4

for i in range(len(line)): # 직선 두 개 씩 비교 # 0,1,2,3,4
    for j in range(i+1,len(line)): # 1,2,3,4. i = 3 일 때 j가 4부터 시작하고 이는 len(line)-1 과 같음
        a,b,e = line[i] 
        c,d,f = line[j] 

        if (a*d - b*c) == 0:
            continue

        x = ( b*f - e*d ) / (a*d - b*c)
        y = (e*c - a*f) / (a*d - b*c)

        # x_list = [] # 가로 길이 = 열의 개수
        # y_list = [] # 세로 길이 = 행의 개수 (이중리스트 바깥 요소들)


        if x == int(x) and y == int(y):
            x = int(x)
            y = int(y)
            cross.append([x,y])

print(cross)

# top, bottom, left, right 
top = max(i[1] for i in cross)
bottom = min(i[1] for i in cross)
left = min(i[0] for i in cross)
right = max(i[0] for i in cross)

print(top)
print(bottom)
print(left)
print(right)

for i in range(top-bottom+1):
    # answer = ["."*(right-left+1)]
    # answer[i] = [] 안됨
    # answer[i].append([]) 안됨

    # answer.append([])
    # for j in range(right-left+1):
    #     answer[i].append('.')

    answer = [['.' for _ in range(right - left + 1)] for _ in range(top - bottom + 1)]
print(answer)


for point in cross:
    # [3,2] 의 y값 2
    # max인 4와 얼마나 차이나는가?
    # 2만큼 작음 = index 0에서 +2

    # x값은 left와 얼마나 차이나는지
    answer[top-point[1]][point[0]-left] = "*" # [세로][가로]
    # str = ''.join(answer[top-point[1]])
    # answer[top-point[1]] = str

result = ["".join(row) for row in answer]

print(answer)