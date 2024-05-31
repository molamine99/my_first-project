export default class Puissance4 {
    constructor(rows, cols) {
        this.rows = rows;
        this.cols = cols;
        this.board = [...Array(rows)].map(() => Array(cols).fill(0));
        this.currentPlayer = 1;
    }

    checkwin(row, col) {
        
        let count = 1;
        count += this.checkdirection(row, col, 0, 1) + this.checkdirection(row, col, 0, -1);
        if (count >= 4) return true;

       
        count = 1;
        count += this.checkdirection(row, col, 1, 0);
        if (count >= 4) return true;

        count = 1;
        count += this.checkdirection(row, col, 1, 1) + this.checkdirection(row, col, -1, -1);
        if (count >= 4) return true;

        count = 1;
        count += this.checkdirection(row, col, 1, -1) + this.checkdirection(row, col, -1, 1);
        if (count >= 4) return true;

        return false;
    }


    play(col) {
        for (let row = this.rows - 1; row >= 0; row--) {
            if (this.board[row][col] === 0) {
                this.board[row][col] = this.currentPlayer;
                if (this.checkwin(row, col)) {
                    return this.currentPlayer;
                }
                this.currentPlayer = this.currentPlayer === 1 ? 2 : 1;
                return 0; 
            }
        }
        return -1; 
    }

    checkdirection(row, col, dRow, dCol) {
        let count = 0;
        let r = row + dRow;
        let c = col + dCol;
        while (r >= 0 && r < this.rows && c >= 0 && c < this.cols && this.board[r][c] === this.currentPlayer) {
            count++;
            r += dRow;
            c += dCol;
        }
        return count;
    }
}

