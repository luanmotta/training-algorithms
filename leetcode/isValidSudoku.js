/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  const rows = new Array(9);
  const cols = new Array(9);
  const boxes = new Array(9);

  for (let i = 0; i < board.length; i++) {
    if (!rows[i]) rows[i] = [];
    for (let j = 0; j < board[i].length; j++) {
      if (!cols[j]) cols[j] = [];
      const currN = board[i][j];
      if (currN === ".") continue;

      if (rows[i][currN]) return false;
      rows[i][currN] = true;
      if (cols[j][currN]) return false;
      cols[j][currN] = true;

      const boxI = Math.trunc((i + 3) / 3) - 1;
      const boxJ = Math.trunc((j + 3) / 3) - 1;
      const currBox = boxI + boxJ * 3;

      if (!boxes[currBox]) boxes[currBox] = [];

      if (boxes[currBox][currN]) return false;
      boxes[currBox][currN] = true;
    }
  }
  return true;
};

isValidSudoku([
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
]);
