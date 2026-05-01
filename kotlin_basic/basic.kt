val array = intArrayOf(10, 20, 30, 40, 50) // IntArray : 크기 고정. add 불가. 값은 변경 가능!
// 즉, array[0] = 100 가능. array.add(60) 불가.
array[0] = 100 // [100, 20, 30, 40, 50]

// sliceArray() : 배열의 일부분을 잘라서 새로운 배열로 반환하는 함수
array.sliceArray(2..5) // [2]이상 [5]이하
// [30, 40, 50]

array.sliceArray(2 until 5) // [2]이상 [5]미만
