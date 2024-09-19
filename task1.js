let board = [];
let currentPlayer = 'O';
let gameOver = false;

// Initialize the board
for (let i = 0; i < 9; i++) {
  board.push('');
  document.getElementById(`cell-${i}`).addEventListener('click', handleCellClick);
}

function handleCellClick(event) {
  if (gameOver) return;
  const cellIndex = event.target.id.split('-')[1];
  if (board[cellIndex] === '') {
    board[cellIndex] = currentPlayer;
    event.target.textContent = currentPlayer;
    checkForWin();
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  }
}

function checkForWin() {
  const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < winConditions.length; i++) {
    const condition = winConditions[i];
    if (board[condition[0]] === board[condition[1]] && board[condition[1]] === board[condition[2]] && board[condition[0]] !== '') {
      gameOver = true;
      alert(`Player ${board[condition[0]]} wins!`);
      return;
    }
  }
  if (!board.includes('')) {
    gameOver = true;
    alert('It\'s a draw!');
  }
}