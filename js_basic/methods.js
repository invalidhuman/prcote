const list1 = [1, 2, 3, 4, 11, 12];

const ret_filter = list1.filter((num) => num % 2 === 0);
console.log("filter결과:", ret_filter);
//filter결과: [ 2, 4, 12 ]

/* 
- reduce() : 축소(응축)
- 반환값이 있으며, 배열을 순회하며 '하나의 결과값(숫자, 문자열, 객체, 배열 등)'을 반환한다.

arr.reduce((accumulator, currentValue) => { ... }, initialValue)
initialValue부터 시작해서 각 요소를 계산한다.
*/
const ret = list1.reduce((max, num) => (max < num ? num : max), 0);
console.log("reduce로 max값 반환:", ret);
//reduce로 max값 반환: 12

// 초기값을 없애도 자동으로 list1[0]을 acc에 넣어주지만,
// 빈 배열이 들어올 수도 있으니, 오류를 줄이기 위해 초깃값을 넣는 게 좋다.
// const ret = list1.reduce((max,num) => max < num ? num : max)
