// https://school.programmers.co.kr/learn/courses/30/lessons/120806?language=kotlin

class Solution {
    fun solution(num1: Int, num2: Int): Int {
        var answer : Int = 0
        // num1 / num2 * 1000 -> 정수 부분 
        // 음수 없음
        
        var result: Double = (num1.toDouble() / num2.toDouble())*1000
        answer = result.toInt()
        
       
        return answer
    }
}

fun main() {
    val sol = Solution()
    println(sol.solution(3, 2))

}