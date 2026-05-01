// lv2_타겟넘버.kt
// https://school.programmers.co.kr/learn/courses/30/lessons/43165

class Solution {
    fun solution(numbers: IntArray, target: Int): Int {
        // target <= 1000
        // 1<= 자연수 <= 50
        // 2개 이상 20개 이하
                
        // numbers = [1,1,1,1,1]
        // target = 3 -> +1 +1 +1 -1 -1
        
        // 1. 반복하며 -1과 +1의 위치찾기?
        // 2. sum 합이 3이 되는지 검증 -> count++
        
        fun dfs(idx:Int,sum:Int):Int {
            if (idx == numbers.size) {
                if (sum==target) {
                    return 1
                }
                
                return 0
            }
            
            return dfs(idx+1,sum+numbers[idx])+dfs(idx+1,sum+numbers[idx]*(-1))
            
        }
        

        // var count: Int = 0
    
        return dfs(0,0)
    }
}