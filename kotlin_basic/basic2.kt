// sliceArray() : 배열의 일부분을 잘라서 새로운 배열로 반환하는 함수
val arr = intArrayOf(10, 20, 30, 40)

val sliced = arr.sliceArray(1..2)

println(sliced.joinToString()) // 20, 30
println(arr.joinToString())    // 10, 20, 30, 40