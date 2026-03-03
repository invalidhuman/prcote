//  문자열 s에 'p'의 개수와 'y'의 개수를 비교해 같으면 true, 다르면 false를 반환하세요. (대소문자 구분 없음)

function solution(s) {
  let pCount = 0;
  let yCount = 0;

  for (let i = 0; i < s.length; i++) {
    let char = s[i].toLowerCase();

    if (char == "p") {
      pCount++;
    }

    if (char == "y") yCount++;
  }

  //   if (pCount == yCount) {
  //     console.log(true);
  //   } else {
  //     console.log(false);
  //   }

  // 삼항연산자로 푸는 법
  const result = pCount == yCount ? true : false;

  console.log(result);

  // 다른 풀이 (console 말고 function의 반환값으로)
  // return pCount === yCount;
}

function solution2(s) {
  const lowerS = s.toLowerCase();

  // 문자열 p 를 기준으로 잘랐을 때 (split) 생기는 조각의 개수는 p+1개이다.
  // ex. split('p') : prospectyy -> '' 'ros' 'ectyy' (p는 사라지니까)
  // ex. split('y') : prospectyy -> 'prospect' '' ''
  const pCount = lowerS.split("p").length - 1;
  const yCount = lowerS.split("y").length - 1;

  return pCount === yCount;
}
