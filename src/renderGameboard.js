export default function renderGameboard(GameBoard, Grid) {
  // const missedShots = GameBoard.missedShots;
  const positions = GameBoard.positions;
  console.log(positions);
  //render missed shots
  // missedShots.forEach((array) => {
  //   const x = array[0];
  //   const y = array[1];
  //   console.log(`${Grid.className}-${x},${y}`);
  //   const cell = document.getElementById(`${Grid.className}-${x},${y}`);
  //   cell.textContent = "•";
  // });
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
          // gridCell.style.backgroundColor = "white";
          gridCell.style.color = "red";
          gridCell.style.border = "1px solid red";
        }
        // else {
        //   const gridCell = document.getElementById(
        //     `${Grid.className}-${i},${j}`,
        //   );
        //   gridCell.style.backgroundColor = "aquamarine";
        //   gridCell.style.border = "1px solid yellow";
        // }
      }
    }
  }
}
