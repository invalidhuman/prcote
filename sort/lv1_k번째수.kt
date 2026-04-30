// lv1_k번째수.kt
// https://school.programmers.co.kr/learn/courses/30/lessons/42748

class Solution {
    fun solution(array: IntArray, commands: Array<IntArray>): IntArray {
        // var answer = intArrayOf()
        var answer = mutableListOf<Int>()
        
        // commands : 배열의 원소가 정수배열
        
        // [ i번째부터 j번째까지, 정렬 후 k 번째 숫자를 answer의 같은 인덱스에]
        // idx: i-1 ~ j-1,  [k-1]을 add.
        
        for (command in commands) {
            val i = command[0]-1
            val j = command[1]-1
            val k = command[2]-1
            
            val sliced:IntArray = array.sliceArray(i until j+1)
            
            val sorted:IntArray = sliced.sortedArray()
            

            answer.add(sorted[k])
            
        }
        
        return answer.toIntArray()
        
    }
}