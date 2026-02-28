
def binary_search(array,target,start,end):
    while start <= end:
        mid = (start+end) // 2 # start와 end 모두 반복마다 바뀌니 그 중간의 몫

        if target == array[mid]:
            return mid

        elif target < array[mid]: # target이 더 작은 경우
            end = mid - 1 # mid는 아니었으니 mid 바로 앞
            
        else: # array[mid] < target:
            start = mid +1 # mid는 아니어으니 mid 바로 뒤

    return None

'''
10 7
1 3 5 7 9 11 13 15 17 19

'''


n, target = map(int,input().split())
array = list(map(int,input().split()))

result = binary_search(array,target,0,n-1)
if result == None:
    print("원소 존재 X")
else:
    print(target,"은",result + 1,"번째에 존재합니다.")