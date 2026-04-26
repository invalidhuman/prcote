# JavaScript 문자열 반복 실수 정리 (repeat 에러)

## 🚨 문제 상황

다음과 같은 코드를 작성했을 때 에러 발생:

js console.log("++++ ".repeat(quotient) + "|" \* repeat(remainder));

실행 결과:
  console.log("++++ ".repeat(quotient) + "|" * repeat(remainder));
                      ^
ReferenceError: repeat is not defined

---

## ❓ 왜 에러가 발생했을까?

문제는 이 부분이다.

js "|" \* repeat(remainder)

JavaScript는 이 코드를 이렇게 해석한다:

js repeat(remainder) // 함수 호출

하지만 우리는 repeat라는 함수를 정의한 적이 없다.

그래서 발생하는 에러:

text ReferenceError: repeat is not defined

---

## ⚠️ 핵심 원인

text repeat는 문자열 메서드인데, 문자열 앞에 붙이지 않아서 "함수 호출"로 해석됨

---

## ❌ 잘못된 코드

js "|" \* repeat(3)

👉 JS에는 문자열 곱셈 문법이 없음

---

## ✅ 올바른 코드

js "|".repeat(3)

👉 문자열 메서드 repeat() 사용

---

## 🔍 동작 원리

js "|".repeat(3)

→ "|" 문자열에 대해 repeat(3) 실행

결과:

js "|||"

---

## 🧠 헷갈리는 포인트

| 표현         | 의미        | 결과    |
| ------------ | ----------- | ------- |
| \* repeat(3) | 함수 호출   | ❌ 에러 |
| ".repeat(3)  | 문자열 반복 | ✅ 정상 |
| " \* 3       | 문자열 곱셈 | ❌ NaN  |

---

## 💡 참고: 왜 \*가 안될까?

JavaScript에서 \*는 숫자 연산자다.

js "|" \* 3

→ 내부적으로:

js Number("|") \* 3

→ "|"는 숫자로 변환 불가 → NaN

---

## 🔥 최종 정리

text 문자열 반복은 반드시 문자열.repeat(n) 형태로 사용한다

---

## ✅ 정답 코드

js console.log("++++ ".repeat(quotient) + "|".repeat(remainder));
