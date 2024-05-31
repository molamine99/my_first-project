import  Puissance4 from './scripts.js';

const rows = 6;
const cols = 7;
const game = new Puissance4(rows, cols);

const gameElement = document.getElementById("game");

function renderBoard() {
    gameElement.innerHTML = "";
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            cell.dataset.row = row;
            cell.dataset.col = col;
            cell.addEventListener("click", handleCellClick);
            gameElement.appendChild(cell);
            if (game.board[row][col] === 1) {
                cell.classList.add("player1");
            } else if (game.board[row][col] === 2) {
                cell.classList.add("player2");
            }
        }
    }
}

function handleCellClick(event) {
    const col = parseInt(event.target.dataset.col);
    const result = game.play(col);
    if (result === 0) {
        renderBoard();
    } else if (result === -1) {
        alert("colonne remplie!");
    } else {
        renderBoard();
        alert(`Player ${result} victoire!`);
    }
}

renderBoard();

