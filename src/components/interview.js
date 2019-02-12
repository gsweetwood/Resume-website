const game = [[12, 12, 1, 1], [1, 8, 1, 1], [0, 17, 1, 1], [5, 4, 3, 1]];

const getWinner = board => {
  const size = board.length;
  let first;

  // Check rows
  for (let row = 0; row < size; row++) {
    first = board[row][0];
    for (let col = 1; col < size; col++) {
      if (board[row][col] !== first) {
        break;
      } else if (col === size - 1) {
        return first === 1 ? "X" : "O";
      }
    }
  }

  // Check columns
  for (let col = 0; col < size; col++) {
    first = board[0][col];
    for (let row = 1; row < size; row++) {
      if (board[row][col] !== first) {
        break;
      } else if (col === size - 1) {
        return first === 1 ? "X" : "O";
      }
    }
  }

  //  Check Diagonals
  first = board[0][0];
  for (let row = 0, col = 0; row < size; row++, col++) {
    if (board[row][col] !== first) {
      break;
    } else if (row === size - 1) {
      return first === 1 ? "X" : "O";
    }
  }

  //  Check anti-diagonal
  first = board[0][size - 1];
  for (let row = 1, col = size - 2; row < size; row++, col--) {
    if (board[row][col] !== first) {
      break;
    } else if (row === size - 1) {
      return first === 1 ? "X" : "O";
    }
  }

  return "DRAW";
};

console.log(getWinner(game));
