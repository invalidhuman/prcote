# 삼각 달팽이 (lv.2)
# https://school.programmers.co.kr/learn/courses/30/lessons/68645

def solution2(n):
    answer = []

    # 행렬 선언
    matrix = [[0]*n for _ in range(n)]
    # 아직 방문하지 않음 = 0

    # 한 변을 갈 때마다 갈 수 있는 칸이 하나씩 줄어듦
    # 처음엔 n칸, 그다음 step에 n-1칸, ...

    flag = 0
    row = -1 # 행
    column = 0 # 열

    num = 0

    while (n>0):
        # flag = 0,1,2 
        # 0 : 아래 (행은 늘어남)
        # 1 : 오른쪽
        # 2 : 대각선 위/왼쪽 (행 -1, 열 -1)
        if flag == 0:
            for _ in range(n):
                row +=1
                # 행이 어디까지 갔었는지 기록을 해놔야함
                num +=1
                matrix[row][column] = num

            flag = 1

        elif flag == 1:
            for _ in range(n):
                column+=1 # column은 한칸 오른쪽으로 가줘야함
                num +=1
                matrix[row][column] = num
                
            flag = 2

        else:
            for _ in range(n):
                row-=1
                column-=1

                num+=1
                matrix[row][column] = num
            
            flag = 0

        n -= 1

    for i in range(len(matrix)):
        for j in range(len(matrix)):
            if matrix[i][j] != 0:
                answer.append(matrix[i][j])

    return answer


# 1부터 n 까지의 합이 마지막 숫자긴함
def solution1(n):
    answer = []

    # 결국 n은 이중리스트의 행의 개수를 의미
    # 높이를 의미
    # 변은 3개이므로 세로 가로 세로 -> 세로 가로 세로 반복하다가 끝난다.
    
    # 1
    # 2 9
    # 3 10 8
    # 4 5 6 7

    # 1
    # 2 15
    # 3 16 14
    # 4 17 21 13
    # 5 18 19 20 12
    # 6  7  8  9 10 11

    # step1 : 행+1
    # step2 : 열+1
    # step3 : 행-1 열 -1

    # 일단 n이 행 수와 열 수를 먼저 결정하니 행렬이 생긴거나 다름없다. 
    # 행과 열이 같으니까.


    # 행렬 선언 및 초기화
    matrix = [[0]*n for _ in range(n)]

    # 함수로 선언해버리는 게 낫나?
    # 아직 방문하지않았음을 0으로 표시


    # while
    # 종료조건
    # 삼각형이 끝났을 때 가둬지넥 종료조건?
    # 아니면 더 갈 데가 없을 때?
    # 좁아지는 걸 어떻게 구현하지

    # 한 변 갈 때마다 갈 수 있는 칸이 하나씩 줄어드네
    # 처음엔 n칸, 그다음 step에 n-1칸, ...

    flag = 0
    row = -1 # 행
    column = 0 # 열

    num = 0

    while (n>0):
        if flag == 0:
            for _ in range(n):
                row +=1
                # 행이 어디까지 갔었는지 기록을 해놔야함
                num +=1
                matrix[row][column] = num

            flag = 1
            print(matrix)
            print("row:",row)
            print("column:",column)
            
        elif flag == 1:
            for _ in range(n):
                column+=1 # column은 한칸 오른쪽으로 가줘야함
                num +=1
                matrix[row][column] = num
                
            flag = 2
            print(matrix)
            print("row:",row)
            print("column:",column)

        else:
            for _ in range(n):
                row-=1
                column-=1

                num+=1
                matrix[row][column] = num
            
            flag = 0
            print(matrix)
            print("row:",row)
            print("column:",column)

        n -= 1

    # 이 때 answer는 그냥 이중 리스트를 만들고 나서 각 행의 요소를 이중리스트가 아닌 그냥 리스트처럼 순서대로 나열하면 된다.

    for i in range(len(matrix)):
        for j in range(len(matrix)):
            if matrix[i][j] != 0:
                answer.append(matrix[i][j])

    print(answer)
    return answer

print(solution1(4))