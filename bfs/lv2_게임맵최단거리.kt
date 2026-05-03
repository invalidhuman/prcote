// lv2_게임맵최단거리
// https://school.programmers.co.kr/learn/courses/30/lessons/1844

class Solution {
    fun solution(maps: Array<IntArray>): Int {

        var n:Int = maps.size
        var m:Int = maps[0].size
        // IntArray를 각 행으로 하는 배열 maps
        val queue = ArrayDeque<Pair<Int,Int>>()
        // queue.add(1)
        // queue.add(2)
        // isNotEmpty()  → 비었는지 확인
        // println(queue.removeFirst()) // 1
        // println(queue.removeFirst()) // 2
        
        // ROR 게임
        // 1행 1열

        // val dx = [-1,1,0,0]
        // val dy = [0,0,-1,1]

        val dx = intArrayOf(-1,1,0,0)
        val dy = intArrayOf(0,0,-1,1)

        queue.add(0 to 0)

        while (queue.isNotEmpty()) {
            val (x,y) = queue.removeFirst()

            if (x==n-1 && y == m-1) {
                return maps[x][y]
            }

            for (i in 0 until 4) {
                var nx = x+ dx[i]
                var ny = y+ dy[i]

                // 범위 체크 & 벽 체크
                if (0 <= nx && nx < n && 0<=ny && ny < m && maps[nx][ny]==1) { // 갈 수 이쓴ㄴ 길이면  
                    maps[nx][ny] = maps[x][y] + 1
                    
                    // 방문 체크
                    queue.add(nx to ny)
                }
            }
        }

        // 1. 동서남북
        // 2. 0인지 1인지 체크
        // 3. 지나온값을 0으로 만들  필요는 없음. 계속더해오면서 이미 1이 아닐테니. (0,0) 은 1 일수있지만 이것도 갈데가없이 막히면서 queue에서 나오낟.

        // . 도달했는지 체크

        return -1 // Int 
        // [ ] 가장 빠른 길의 경로 개수 세기 
        // [ ] (못가면 -1)
    }
}
fun main() {

    val sol = Solution()

    val test1 = arrayOf(

        intArrayOf(1, 0, 1, 1, 1),

        intArrayOf(1, 0, 1, 0, 1),

        intArrayOf(1, 0, 1, 1, 1),

        intArrayOf(1, 1, 1, 0, 1),

        intArrayOf(0, 0, 0, 0, 1)

    )

    println(sol.solution(test1)) // 11

    val test2 = arrayOf(

        intArrayOf(1, 0, 1, 1, 1),

        intArrayOf(1, 0, 1, 0, 1),

        intArrayOf(1, 0, 1, 1, 1),

        intArrayOf(1, 1, 1, 0, 0),

        intArrayOf(0, 0, 0, 0, 1)

    )

    println(sol.solution(test2)) // -1

}