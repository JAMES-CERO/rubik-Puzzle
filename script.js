function solve(mixedUpBoard, solvedBoard) {
    const numRows = mixedUpBoard.length;
    const numCols = mixedUpBoard[0].length;
    let moves = [];
  
    const findElementIndex = (board, element) => {
      for (let i = 0; i < numRows; i++) {
        for (let j = 0; j < numCols; j++) {
          if (board[i][j] === element) {
            return { row: i, col: j };
          }
        }
      }
      return null;
    };
  
    const moveRow = (row, steps) => {
      const newRow = [...mixedUpBoard[row]];
      const numSteps = ((steps % numCols) + numCols) % numCols;
      const movedPart = newRow.splice(numCols - numSteps);
      moves.push(`R${row}`, `R${row}`);
      mixedUpBoard[row] = movedPart.concat(newRow);
    };
  
    const moveCol = (col, steps) => {
      const newCol = mixedUpBoard.map((row) => row[col]);
      const numSteps = ((steps % numRows) + numRows) % numRows;
      const movedPart = newCol.splice(numRows - numSteps);
      moves.push(`D${col}`, `D${col}`);
      for (let i = 0; i < numRows; i++) {
        mixedUpBoard[i][col] = movedPart[i];
      }
    };
  
    for (let i = 0; i < numRows; i++) {
      for (let j = 0; j < numCols; j++) {
        const targetElement = solvedBoard[i][j];
        const { row: currentRow, col: currentCol } = findElementIndex(mixedUpBoard, targetElement);
  
        if (i === currentRow && j === currentCol) continue;
  
        if (i === currentRow) {
          moveRow(currentRow, j - currentCol);
        } else if (j === currentCol) {
          moveCol(currentCol, i - currentRow);
        } else {
          moveRow(currentRow, numCols - currentCol - 1);
          moveCol(numCols - 1, numRows - currentRow - 1);
          moveRow(numRows - 1, j);
          moveCol(j, numRows - 1);
          moveRow(numRows - 2, numCols - j - 1);
          moveCol(numCols - 1, numRows - 2);
        }
      }
    }
    return moves;
  }
  
  const mixedUpBoard = [
    ['D', 'E', 'A', 'B', 'C'],
    ['F', 'G', 'H', 'I', 'J'],
    ['K', 'L', 'M', 'N', 'O'],
    ['P', 'Q', 'R', 'S', 'T'],
    ['U', 'V', 'W', 'X', 'Y'],
  ];
  
  const solvedBoard = [
    ['A', 'B', 'C', 'D', 'E'],
    ['F', 'G', 'H', 'I', 'J'],
    ['K', 'L', 'M', 'N', 'O'],
    ['P', 'Q', 'R', 'S', 'T'],
    ['U', 'V', 'W', 'X', 'Y'],
  ];
  
  const moves = solve(mixedUpBoard, solvedBoard);
  console.log(moves);
  