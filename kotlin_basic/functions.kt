
class Solution {
    fun solution(num1: Int, num2: Int): Int {
        var answer = 0

        if (num1 > num2) {
            answer = num1
        } else {
            answer = num2
        }

        return answer
    }

    fun solution2(age: Int): Int {
        // 나이가 19 이상이면 1, 아니면 0 반환

        return if (age >= 19) 1 else 0
    }

    fun solution3(numbers:IntArray):IntArray {
        // 모든 원소를 2배로 만든 새 IntArray를 반환
        // var answer = intArrayOf로는 못푸나?
        var answer = IntArray(numbers.size)
        for (i in numbers.indices) {
            answer[i] = numbers[i] *2
        }

        return answer
    }

    fun solution4(numbers: IntArray): IntArray {
        // 짝수면 그대로 두고, 홀수면 10을 더한 새 IntArray를 반환
        
        var answer = IntArray(numbers.size)

        for (i in numbers.indices) {
            
        }
        
        return numbers
    }
}

fun main() {
    println(Solution().solution(3, 12))
    println(Solution().solution2(23))
    println(Solution().solution3(intArrayOf(1,5,3)))
}