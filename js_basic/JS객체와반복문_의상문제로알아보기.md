# JS 객체(Object)와 반복문 정리: 의상 문제 기준

문제 링크 : <br>
https://school.programmers.co.kr/learn/courses/30/lessons/42578?language=javascript

## 1. `{}`는 무엇인가

```js
let countByKind = {};
```

이 코드는 **객체(Object)** 를 만든다.

코딩테스트에서는 객체를 보통 다음 용도로 많이 쓴다.

```text
key -> value 형태의 딕셔너리 / 해시맵
```

의상 문제에서는 의상 종류별 개수를 세기 위해 사용한다.

```js
countByKind = {
  headgear: 2,
  eyewear: 1,
};
```

의미는 다음과 같다.

```text
headgear 종류의 의상은 2개
eyewear 종류의 의상은 1개
```

---

## 2. `for...of`와 `for...in`의 차이

## `for...of`

```js
for (const [name, kind] of clothes) {
  // ...
}
```

`for...of`는 **iterable**, 즉 순회 가능한 값에 사용한다.

대표적으로 다음 자료구조에 사용할 수 있다.

```text
Array
String
Map
Set
```

의상 문제에서 `clothes`는 2차원 배열이다.

```js
const clothes = [
  ["yellow_hat", "headgear"],
  ["blue_sunglasses", "eyewear"],
  ["green_turban", "headgear"],
];
```

그래서 다음 코드가 가능하다.

```js
for (const [name, kind] of clothes) {
  console.log(name, kind);
}
```

각 반복에서 배열 한 행이 구조분해 할당된다.

```text
첫 번째 반복: name = "yellow_hat", kind = "headgear"
두 번째 반복: name = "blue_sunglasses", kind = "eyewear"
세 번째 반복: name = "green_turban", kind = "headgear"
```

---

## `for...in`

```js
for (const kind in countByKind) {
  // ...
}
```

`for...in`은 **객체의 key를 순회**할 때 사용한다.

예를 들어 객체가 다음과 같다면:

```js
const countByKind = {
  headgear: 2,
  eyewear: 1,
};
```

다음 반복문에서 `kind`에는 객체의 key가 들어온다.

```js
for (const kind in countByKind) {
  console.log(kind);
}
```

출력:

```text
headgear
eyewear
```

---

## 3. Object는 왜 `for...of`가 안 되는가

객체는 기본적으로 iterable이 아니다.

그래서 다음 코드는 사용할 수 없다.

```js
for (const item of countByKind) {
  // TypeError
}
```

객체를 `for...of`로 순회하고 싶다면 `Object.keys`, `Object.values`, `Object.entries` 등을 사용해서 배열로 바꿔야 한다.

---

## 4. `for...in`은 왜 key를 가져오는가

```js
for (const kind in countByKind) {
  // ...
}
```

`for...in`은 문법 자체가 객체의 key를 순회하도록 만들어져 있다.

즉, 다음 코드와 비슷하다고 보면 된다.

```js
for (const kind of Object.keys(countByKind)) {
  // ...
}
```

---

## 5. value는 어떻게 가져오는가

`for...in`으로 key를 가져온 뒤, value는 대괄호 접근으로 가져온다.

```js
for (const kind in countByKind) {
  const count = countByKind[kind];
}
```

예를 들어:

```js
const countByKind = {
  headgear: 2,
  eyewear: 1,
};
```

이라면:

```js
countByKind["headgear"]; // 2
countByKind["eyewear"]; // 1
```

---

## 6. 의상 종류별 개수 세기

기본 방식은 다음과 같다.

```js
const countByKind = {};

for (const [name, kind] of clothes) {
  if (countByKind[kind]) {
    countByKind[kind]++;
  } else {
    countByKind[kind] = 1;
  }
}
```

의미는 다음과 같다.

```text
이미 해당 종류가 객체에 있으면 +1
처음 등장한 종류라면 1로 초기화
```

---

## 7. 축약 패턴

위 코드는 다음과 같이 줄일 수 있다.

```js
countByKind[kind] = (countByKind[kind] || 0) + 1;
```

전체 코드로 보면 다음과 같다.

```js
const countByKind = {};

for (const [name, kind] of clothes) {
  countByKind[kind] = (countByKind[kind] || 0) + 1;
}
```

---

## 8. `||` 연산자의 의미

```js
A || B;
```

의 의미는 다음과 같다.

```text
A가 truthy면 A를 사용
A가 falsy면 B를 사용
```

의상 문제에서는 다음 패턴으로 사용한다.

```js
countByKind[kind] = (countByKind[kind] || 0) + 1;
```

### 처음 등장한 종류인 경우

```js
countByKind[kind]; // undefined
```

따라서:

```js
undefined || 0; // 0
```

결과:

```js
countByKind[kind] = 0 + 1;
```

즉:

```js
countByKind[kind] = 1;
```

### 이미 등장한 종류인 경우

```js
countByKind[kind]; // 1
```

따라서:

```js
1 || 0; // 1
```

결과:

```js
countByKind[kind] = 1 + 1;
```

즉:

```js
countByKind[kind] = 2;
```

정리하면 이 코드는 다음 의미다.

```text
없으면 0부터 시작해서 +1
있으면 기존 값에 +1
```

---

## 9. `Object.keys`, `Object.values`, `Object.entries`

객체를 배열처럼 다루고 싶을 때 사용한다.

```js
Object.keys(obj); // key 배열
Object.values(obj); // value 배열
Object.entries(obj); // [key, value] 배열
```

예를 들어:

```js
const countByKind = {
  headgear: 2,
  eyewear: 1,
};
```

결과는 다음과 같다.

```js
Object.keys(countByKind);
// ["headgear", "eyewear"]

Object.values(countByKind);
// [2, 1]

Object.entries(countByKind);
// [["headgear", 2], ["eyewear", 1]]
```

---

## 10. `Object.entries` 활용 예시: 의상 문제 실제 코드

```js
function solution(clothes) {
  const countByKind = {};

  for (const [name, kind] of clothes) {
    countByKind[kind] = (countByKind[kind] || 0) + 1;
  }

  let answer = 1;

  for (const [kind, count] of Object.entries(countByKind)) {
    answer *= count + 1;
  }

  return answer - 1;
}
```

`Object.entries(countByKind)`는 객체를 `[key, value]` 형태의 배열로 바꿔준다.

예를 들어 `countByKind`가 다음과 같다면:

```js
{
  headgear: 2,
  eyewear: 1
}
```

`Object.entries(countByKind)`의 결과는 다음과 같다.

```js
[
  ["headgear", 2],
  ["eyewear", 1],
];
```

따라서 다음 코드에서:

```js
for (const [kind, count] of Object.entries(countByKind)) {
  answer *= count + 1;
}
```

각 반복은 다음처럼 동작한다.

```text
첫 번째 반복: kind = "headgear", count = 2
두 번째 반복: kind = "eyewear", count = 1
```

의상 문제에서는 `kind` 자체는 계산에 직접 필요하지 않고, `count`만 필요하다.

그래서 더 줄이면 다음처럼 쓸 수도 있다.

```js
function solution(clothes) {
  const countByKind = {};

  for (const [name, kind] of clothes) {
    countByKind[kind] = (countByKind[kind] || 0) + 1;
  }

  let answer = 1;

  for (const count of Object.values(countByKind)) {
    answer *= count + 1;
  }

  return answer - 1;
}
```

다만 처음에는 `Object.entries`를 사용해서 key와 value 구조를 직접 보는 편이 이해에 더 좋다.

---

## 11. 의상 문제 전체 흐름

```js
function solution(clothes) {
  const countByKind = {};

  for (const [name, kind] of clothes) {
    countByKind[kind] = (countByKind[kind] || 0) + 1;
  }

  let answer = 1;

  for (const count of Object.values(countByKind)) {
    answer *= count + 1;
  }

  return answer - 1;
}
```

### 왜 `count + 1`을 곱하는가

각 의상 종류마다 선택지는 다음과 같다.

```text
해당 종류의 의상 중 하나를 입는 경우
해당 종류를 아예 안 입는 경우
```

예를 들어:

```text
headgear: 2개
eyewear: 1개
```

이라면:

```text
headgear 선택지 = 2개 중 하나 선택 + 안 입음 = 3
eyewear 선택지 = 1개 중 하나 선택 + 안 입음 = 2
```

전체 조합 수:

```text
3 * 2 = 6
```

그런데 문제 조건상 아무것도 안 입는 경우는 제외해야 한다.

```text
6 - 1 = 5
```

그래서 최종 반환은 다음과 같다.

```js
return answer - 1;
```

---

## 12. 핵심 정리

```text
{}는 객체(Object)이고, key-value 저장에 사용한다.

for...of는 Array, String, Map, Set 같은 iterable 순회에 사용한다.

for...in은 객체의 key 순회에 사용한다.

객체의 value는 obj[key]로 가져온다.

Object.entries(obj)는 객체를 [key, value] 배열로 바꿔준다.

Object.values(obj)는 value만 배열로 가져온다.

개수 세기 문제에서는 다음 패턴이 자주 쓰인다.

obj[key] = (obj[key] || 0) + 1;
```
