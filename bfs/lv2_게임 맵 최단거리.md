# **JavaScript BFS - 게임 맵 최단거리 정리**

## **문제 핵심**

- BFS(Breadth First Search)는 “가장 먼저 도착한 경로가 최단 거리”라는 성질을 이용한다.
- 따라서 미로/맵 최단거리 문제는 BFS로 푸는 것이 정석이다.

---

# **1. BFS에서 자주 사용하는 방향 배열**

## **dx / dy 방식**

```js
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];
```

의미:

```txt
(-1, 0) : 위
(1, 0)  : 아래
(0, -1) : 왼쪽
(0, 1)  : 오른쪽
```

반복:

```js
for (let i = 0; i < 4; i++) {
  const nx = x + dx[i];
  const ny = y + dy[i];
}
```

---

## **move 배열 방식**

```js
const move = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];
```

반복:

```js
for (const [dx, dy] of move) {
  const nx = x + dx;
  const ny = y + dy;
}
```

두 방식은 사실상 동일하다.

---

# **2. 내가 처음 푼 BFS 풀이**

## **특징**

- maps 자체에 거리 정보를 덮어쓴다.
- queue.shift()를 사용한다.
- dist 배열을 따로 만들지 않는다.

```js
function solution(maps) {
  const n = maps.length;
  const m = maps[0].length;

  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];

  const queue = [[0, 0]];

  while (queue.length > 0) {
    const [x, y] = queue.shift();

    if (x === n - 1 && y === m - 1) {
      return maps[x][y];
    }

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (
        nx >= 0 &&
        nx < n &&
        ny >= 0 &&
        ny < m &&
        maps[nx][ny] === 1
      ) {
        maps[nx][ny] = maps[x][y] + 1;
        queue.push([nx, ny]);
      }
    }
  }

  return -1;
}
```

---

## **거리 누적 원리**

```js
maps[nx][ny] = maps[x][y] + 1;
```

현재 칸까지의 거리:

```txt
maps[x][y]
```

다음 칸 거리:

```txt
현재 거리 + 1
```

예시:

```txt
1 1 1
0 1 1
0 0 1
```

탐색 후:

```txt
1 2 3
0 3 4
0 0 5
```

---

## **이 풀이의 장점**

```txt
- 코드가 짧다
- dist 배열이 필요 없다
- BFS 원리를 빠르게 구현 가능
```

---

## **이 풀이의 단점**

```txt
- 원본 maps를 수정한다
- 시작점 (0,0)이 한 번 다시 큐에 들어갈 수 있다
- queue.shift()가 비효율적이다
```

---

# **3. 시작점이 다시 방문될 수 있는 이유**

예시:

```txt
1 1
1 1
```

초기:

```txt
queue = [(0,0)]
```

(0,0) 탐색:

```txt
1 2
2 1
```

(1,0) 탐색 시:

```txt
북쪽 (0,0)을 다시 확인
```

문제:

```txt
maps[0][0] === 1
```

이므로 다시 큐에 들어갈 수 있다.

하지만 한 번 다시 방문되면:

```txt
maps[0][0] = 3
```

이 되어 이후에는 다시 방문되지 않는다.

즉:

```txt
무한 루프는 발생하지 않는다.
```

다만 BFS 구조상 dist 배열을 따로 두는 방식이 더 깔끔하다.

---

# **4. queue.shift()가 느린 이유**

## **shift()의 동작**

```js
queue.shift()
```

배열의 맨 앞 원소를 제거한다.

예시:

```txt
[A, B, C, D]
```

shift 후:

```txt
[B, C, D]
```

하지만 내부적으로는:

```txt
B를 앞으로 이동
C를 앞으로 이동
D를 앞으로 이동
```

이런 작업이 발생한다.

즉:

```txt
원소를 하나 제거할 때마다
뒤 원소들을 모두 당겨야 한다.
```

---

## **BFS에서 문제가 되는 이유**

BFS는 queue에서 매우 많은 pop을 수행한다.

```js
while (queue.length > 0) {
  queue.shift();
}
```

queue가 커질수록 shift 비용이 커진다.

최악의 경우:

```txt
O(N^2)
```

수준까지 느려질 수 있다.

---

# **5. shift()를 사용하지 않는 BFS 풀이**

## **핵심 아이디어**

배열에서 제거하지 않고,
front가 어디까지 읽었는지만 기억한다.

---

## **코드**

```js
function solution(maps) {
  const n = maps.length;
  const m = maps[0].length;

  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];

  const queue = [[0, 0]];
  let front = 0;

  while (front < queue.length) {
    const [x, y] = queue[front++];

    if (x === n - 1 && y === m - 1) {
      return maps[x][y];
    }

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (
        nx >= 0 &&
        nx < n &&
        ny >= 0 &&
        ny < m &&
        maps[nx][ny] === 1
      ) {
        maps[nx][ny] = maps[x][y] + 1;
        queue.push([nx, ny]);
      }
    }
  }

  return -1;
}
```

---

## **while 조건이 종료되는 이유**

```js
while (front < queue.length)
```

의 의미:

```txt
front = 지금까지 꺼낸 개수
queue.length = 지금까지 넣은 개수
```

즉:

```txt
꺼낸 개수 === 넣은 개수
```

가 되면 종료된다.

예시:

```txt
queue.length = 10
front = 10
```

이면:

```txt
더 이상 처리할 노드가 없음
```

---

## **이 방식의 장점**

```txt
- shift()보다 훨씬 빠르다
- Queue 클래스를 만들지 않아도 된다
- 코딩테스트에서 많이 사용한다
```

---

# **6. dist 배열을 따로 두는 BFS 풀이**

## **특징**

```txt
maps = 길/벽 정보

0 : 벽
1 : 길
```

```txt
dist = 방문 여부 + 거리 정보
```

---

## **코드**

```js
function solution(maps) {
  const n = maps.length;
  const m = maps[0].length;

  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];

  const dist = Array.from({ length: n }, () => Array(m).fill(-1));

  const queue = [[0, 0]];
  let front = 0;

  dist[0][0] = 1;

  while (front < queue.length) {
    const [x, y] = queue[front++];

    if (x === n - 1 && y === m - 1) {
      return dist[x][y];
    }

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx < 0 || nx >= n || ny < 0 || ny >= m) {
        continue;
      }

      if (maps[nx][ny] === 0) {
        continue;
      }

      if (dist[nx][ny] !== -1) {
        continue;
      }

      dist[nx][ny] = dist[x][y] + 1;
      queue.push([nx, ny]);
    }
  }

  return -1;
}
```

---

## **이 방식의 장점**

```txt
- 원본 maps를 보존한다
- 방문 여부와 거리 정보를 분리한다
- 가장 명확하고 안정적이다
- 시작점 재방문 문제가 없다
```

---

## **이 방식의 단점**

```txt
- dist 배열 메모리가 추가로 필요하다
```

---

# **7. Queue 클래스를 직접 구현하는 BFS 풀이**

## **Queue 클래스**

```js
class Queue {
  items = [];
  front = 0;
  rear = 0;

  push(item) {
    this.items.push(item);
    this.rear++;
  }

  first() {
    return this.items[this.front];
  }

  last() {
    return this.items[this.rear - 1];
  }

  pop() {
    return this.items[this.front++];
  }

  isEmpty() {
    return this.front === this.rear;
  }
}
```

---

## **rear - 1인 이유**

```txt
rear는 마지막 원소 위치가 아니라
다음에 삽입될 위치이다.
```

예시:

```txt
items = [10, 20, 30]
index =   0   1   2
rear = 3
```

마지막 원소:

```js
items[rear - 1]
```

---

## **pop() 원리**

```js
return this.items[this.front++];
```

의미:

```txt
현재 front 위치 값을 반환 후
front를 1 증가
```

즉:

```js
const item = this.items[this.front];
this.front++;
return item;
```

와 동일하다.

---

## **Queue를 사용하는 BFS 코드**

```js
class Queue {
  items = [];
  front = 0;
  rear = 0;

  push(item) {
    this.items.push(item);
    this.rear++;
  }

  pop() {
    return this.items[this.front++];
  }

  isEmpty() {
    return this.front === this.rear;
  }
}

function solution(maps) {
  const n = maps.length;
  const m = maps[0].length;

  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];

  const dist = Array.from({ length: n }, () => Array(m).fill(-1));

  const q = new Queue();

  q.push([0, 0]);
  dist[0][0] = 1;

  while (!q.isEmpty()) {
    const [x, y] = q.pop();

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx < 0 || nx >= n || ny < 0 || ny >= m) {
        continue;
      }

      if (maps[nx][ny] === 0) {
        continue;
      }

      if (dist[nx][ny] !== -1) {
        continue;
      }

      dist[nx][ny] = dist[x][y] + 1;
      q.push([nx, ny]);
    }
  }

  return dist[n - 1][m - 1];
}
```

---

# **8. Queue 클래스 vs front 변수 방식**

## **front 변수 방식**

```txt
장점
- 코드 짧음
- 빠름
- 코테에서 많이 사용
```

```txt
단점
- 큐 로직이 코드 내부에 직접 드러남
```

---

## **Queue 클래스 방식**

```txt
장점
- 재사용 가능
- 역할이 명확함
- 자료구조 학습에 좋음
```

```txt
단점
- 코드가 길어짐
```

---

## **추천**

```txt
코딩테스트:
front 변수 방식 추천
```

```txt
자료구조 학습:
Queue 클래스 구현 추천
```

---

# **9. 방문한 칸을 0으로 만드는 방식**

예시:

```js
maps[nx][ny] = 0;
```

이 방식은:

```txt
방문 처리는 가능
```

하지만:

```txt
거리 정보가 사라진다.
```

따라서 거리까지 저장하려면:

```js
queue.push([x, y, distance]);
```

처럼 거리 값을 따로 queue에 저장해야 한다.

---

# **10. 최종 정리**

## **가장 간단한 풀이**

```txt
maps에 거리 덮어쓰기
+ front 변수 방식
```

## **가장 정석적인 풀이**

```txt
dist 배열 분리
+ front 변수 방식
```


### queue.shift()를 반복 사용하는 BFS

```txt
배열 재정렬 비용 때문에
큰 입력에서 느려질 수 있다.
```