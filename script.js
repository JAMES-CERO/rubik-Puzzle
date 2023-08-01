function solve(mixedUpBoard, solvedBoard) {
    let count = 0;
    const numRows = mixedUpBoard.length();
    const numCol = mixedUpBoard[0].length();
    let moves = [];

    const findElementIndex = (board, element) => {
        for (let i = 0; i < numRows; i++) {
            for (let j = 0; j < numCol; j++) {
                if (board[i][j] == element) {
                    return { row: i, col: j };
                }
            }
        }
        return null;
    }

    const moveRow = (row, steps) => {
        const newRow = [...mixedUpBoard[row]];
        const numSteps = ((steps % numCol) + numCol) % numCol;
        const MovedPart = newRow.splite(numCol - numSteps);
        moves.push(`R${row}`, `R${row}`);
        mixedUpBoard[row] = MovedPart.concat(newRow);
    }

    const moveCol = (col, steps) => {
        const newCol = mixedUpBoard.map((row) => row[col]);
        const numSteps = ((steps % numRows) + numRows) % numRows;
        const MovedPart = newCol.splite(numRows - numSteps);
        moves.push(`D${row}`, `D${row}`);
        for (let i = 0; i < numRows; i++) {
            mixedUpBoard[i][col] = MovedPart[i]
        }
    }

    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j < numCol; j++) {
            const targetElement = solvedBoard[i][j];
            const { row: currentRow, col: currentCol } = findElementIndex(mixedUpBoard, targetElement);

            if (i == currentRow && j == currentCol) continue;

            if (i == currentRow) {
                moveRow(currentRow, j - currentCol);
            } else if (j == currentRow) {
                moveCol(currentCol, i - currentCol)
            } else {
                moveRow(currentCol, numCol - currentCol - 1);
                moveCol(numCol - 1, numRows - currentRow - 1);
                Row(numRows - 1, j);
                moveCol(j, numRows - 1);
                moveRow(numRows - 2, numCol - j - 1);
                moveCol(numCol - 1, numRows - 2);
            }
        }
    }
    return moves;
}

    mixedUpBoard = [
        ['D', 'E', 'A', 'B', 'C'],
        ['F', 'G', 'H', 'I', 'J'],
        ['K', 'L', 'M', 'N', 'O'],
        ['P', 'Q', 'R', 'S', 'T'],
        ['U', 'V', 'W', 'X', 'Y'],
    ]
    solvedBoard = [
        ['A', 'B', 'C', 'D', 'E'],
        ['F', 'G', 'H', 'I', 'J'],
        ['K', 'L', 'M', 'N', 'O'],
        ['P', 'Q', 'R', 'S', 'T'],
        ['U', 'V', 'W', 'X', 'Y'],
    ]

    const moves = solveLoopoverPuzzle(mixedUpBoard, solvedBoard);