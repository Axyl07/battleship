export default function renderGameboard(GameBoard, Grid) {
  const positions = GameBoard.positions;
  // console.log(positions);

  //render hit shots
  for (let i = 0; i < positions.length; i++) {
    const row = positions[i];
    for (let j = 0; j < row.length; j++) {
      const col = row[j];
      if (typeof col === "object") {
        if (col.isSunk()) {
          const gridCell = document.getElementById(
            `${Grid.className}-${i},${j}`,
          );
            gridCell.textContent = 'X'
        
          gridCell.style.color = "red";
          gridCell.style.border = "1px solid red";
        }
  
      }
    }
  }
}
