function solve(mixedUpBoard, solvedBoard) {
  let count = 0;
  const numRows = mixedUpBoard.length();
  const numCol = mixedUpBoard[0].length();
  let moves = [];
  
  for( let i = 0; i < numRows; i++){
    for( let j = 0; j < numCol; j++ ){
      const targetElement = solvedBoard[i][j];
      const { row: currentRow, col: currentCol} = findElementIndex(mixedUpBoard, targetElement);
      
      if(i == currentRow && j ==currentCol) continue ;
      
      if ( i == currentRow) {
        
      }
    }
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
  
  if ( solveUpBoard[a[i]] == "up"){
    solveUpBoard
  }
  return null;
}