// Lv.3_N으로표현 (dp)
// https://school.programmers.co.kr/learn/courses/30/lessons/42895?language=kotlin


class Solution {
    fun solution(N: Int, number: Int): Int {
        // 5를 최대 8번까지 써서
        // 12를 만들 수 있는 최소 5 사용 횟수 찾기
        
        // N을 최대 8번까지 써서
        // number를 만들 수 있는 최소 number 사용 횟수 찾기
        
        // [x] 최솟값이 8보다 크면
        
        // 0. 반례
        // [x] 8을 5로 만들 수?  있긴함 5 + 5/5 + 5/5 + 5/5
        // [x] 5를 5로 만드는 건 무조건 1이 최소    
        if (number == N) {
            return 1
        }
        // 1. dp 정하기
        // 숫자들 모여야함
        var dp = List(9) {mutableSetOf<Int>()} 
        
        // 2. 55 555 5555 먼저넣기
        var basicNum = 0
        for (i in 1..8) {
            // 기존 basicNum이 55다?
            // 다음은 555 = 550 + 5
            basicNum = basicNum * 10 + N
            // 처음엔 0 * 10 + 5
            // 5 * 10 + 5
            dp[i].add(basicNum)
        }
        
        // 3. for문돌리기
        
        for (i in 1..8) {
            // i = 4
            // dp[i] 에 대해 앞에것들로 조합하기
            for (j in 1 until i) { // [ ] 4 -> i로 바꿔야함 
                // dp[1] dp[3] / dp[2] dp[2] / dp[3] dp[1]
                // dp[j] dp[4-j] 
                
                for (num1 in dp[j]) {
                    for (num2 in dp[i-j]) {
                        dp[i].add(num1+num2)
                        dp[i].add(num1-num2)
                        dp[i].add(num1*num2)
                                                
                        if (num2 != 0) {
                            dp[i].add(num1/num2)
                        }
                    }
                }
                
                
            }
            
            // 5. dp[i] 구성 끝날때마다 number 나왔는지 체크
            if (number in dp[i]) {
                return i
            }
        }
        
        
        
        
        // for문에서 해결안나고 i가 8넘으면
        return -1
        
        
    }
}