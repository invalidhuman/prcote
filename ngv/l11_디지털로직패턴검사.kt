class Solution {
    fun solution(s: String, k: Int, m: Int): Int {
        // 문자열을 숫자 리스트로 만드는법
        var bits = s.map {it.digitToInt()}  // List<Int> 가 됨
        // val bits = s.map { it.toString().toInt() }

        // m보다 큰 지를 판별하려면 일단 지금까지 몇 번인지 메모해야함ㄴ
        var result = 0

        // Step 3: 로직 반복 (문제 규칙에 따라 비트 연산 수행)
        // s를 bits로 array로 옮겨놓음
        for (i in 0 until s.length) {
            val subList = bits.subList
        }

        // Step 4: 결과 반환
        return if (result > m) 1 else 0
    }
}

fun main() {
    println(Solution().solution("011010010100",3,3))
    println(Solution().solution("011010010100",3,4))

}