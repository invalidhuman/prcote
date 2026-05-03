class Solution {
    fun solution(n: Int, k: Int): IntArray {
        val visited = IntArray(k + 1)
        var result: IntArray? = null

        // 중첩 함수(Nested Function)로 구현하신 경우
        fun dfs(idx: Int, num: Int) {
            // 이미 정답을 찾았다면 더 이상 진행하지 않음
            if (result != null) return

            // k개를 다 뽑은 경우 (기본 조건)
            if (idx == k + 1) {
                // sumOf 대신 반복문이나 다른 방식으로 합을 구하셨을 수도 있음
                if (visited.sliceArray(1..k).sum() % k == 0) {
                    result = visited.sliceArray(1..k)
                }
                return
            }

            // 사용자님의 수식 적용: n - (k - idx)
            // 예: n=7, k=4, idx=1이면 7 - (4 - 1) = 4까지 루프 가능
            val limit = n - (k - idx)
            for (i in (num + 1)..limit) {
                visited[idx] = i
                dfs(idx + 1, i)
                if (result != null) return
            }
        }

        // 초기 호출: 1번째 상자를 뽑을 차례, 이전 숫자는 0
        dfs(1, 0)

        // ★ 여기서 return이 누락되었거나 타입이 안 맞으면 오류 발생!
        return result ?: intArrayOf(-1)
    }
}