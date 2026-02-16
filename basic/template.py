import sys

# 1. 빠른 입력 설정 (매번 sys.stdin.readline 쓰기 귀찮으므로 치환)
input = sys.stdin.readline
# 맨 끝의 개행문자까지 같이 입력받으므로 문자열을 저장하고 싶은 경우 오른쪽 공백을 제거하는 .rstrip()을 추가로 해준다.

# 2. 정수 하나 입력받기
n = int(input())

# 3. 공백으로 구분된 정수 여러 개 입력받기
a, b, c = map(int, input().split())

# 4. 정수 리스트 입력받기
arr = list(map(int, input().split()))

# 5. 2차원 배열 입력받기 (n행)
matrix = [list(map(int, input().split())) for _ in range(n)]

# 6. 문자열 입력받기 (개행문자 제거 필수)
s = input().strip()