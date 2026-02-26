'''
아래와 같이 연결된 그래프가 있을 때, 
1번 노드에서 시작하여 BFS로 탐색할 경우 노드들의 방문 순서를 리스트로 반환하는 함수를 작성하세요. 
(단, 인접한 노드가 여러 개일 경우 작은 번호부터 방문합니다.)

1 - [2, 3], 2 - [1, 4, 5], 3 - [1], 4 - [2], 5 - [2]
'''

graph = [[2,3],[1,4,5,],[1],[2],[2]]

def bfs_order(graph):
    answer = 0
    node = 1


    return answer

# def bfs_order(graph,1):
#     answer = 0


#     return answer