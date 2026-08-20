/**
 * 프로그래머스120866 안전지대
 * https://school.programmers.co.kr/learn/courses/30/lessons/120866
 *
 * @param {number[][]} board 지뢰 배치가 담긴 정사각형 배열
 * @returns {number} 안전한 칸의 개수
 */
function solution(board) {
  let answer = 0;

  // board는 무조건 정사각형
  const rows = board.length;
  const cols = board[0].length;

  // 지뢰가 있는 칸만 위험지역이 아니라, 지뢰 상하좌우대각선까지.(주변8칸)

  // 반복문을 통해 board 전체를 탐색하며 지뢰를 찾는다.
  // 모든 지뢰 주변부를 위험지역으로 표기한다.
  // 다 마치고 난 뒤 안전지역을 센다.

  // 1. 지뢰 주변부 표기 함수 만들기 (1을 만나면 실행)
  function makeDanger(row, col) {
    for (let dr = -1; dr <= 1; dr++) {
      for (let dc = -1; dc <= 1; dc++) {
        const nextRow = row + dr;
        const nextCol = col + dc;

        const isInside =
          nextRow >= 0 && nextRow < rows && nextCol >= 0 && nextCol < cols;

        // 1이 있는 dr dc가 둘 다 0인경우를 제외해도되고 안해도됨
        if (isInside && board[nextRow][nextCol] == 0) {
          board[nextRow][nextCol] = 2;
        }
      }
    }
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (board[i][j] == 1) {
        makeDanger(i, j);
      }
    }
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (board[i][j] == 0) {
        answer++;
      }
    }
  }

  return answer;
}

module.exports = solution;
