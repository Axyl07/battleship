export default function initialRender(Player, Grid) {
  //render missed Shots
  // const missedShots = Player.gameboard.missedShots;
  // missedShots.forEach((array) => {
  //   const x = array[0];
  //   const y = array[1];
  //   console.log(`${Grid.className}-${x},${y}`);
  //   const cell = document.getElementById(`${Grid.className}-${x},${y}`);
  //   cell.textContent = "•";
  // });
  // console.log(positions);

  // console.log(positions);

  //render hit shots
  const positions = Player.gameboard.positions;
  for (let i = 0; i < positions.length; i++) {
    const row = positions[i];
    for (let j = 0; j < row.length; j++) {
      const col = row[j];
      if (typeof col === "object") {
        const gridCell = document.getElementById(
          `${Grid.className}-${i},${j}`,
        );
        gridCell.style.backgroundColor = "aquamarine"
        gridCell.style.border = "1px dashed cyan"
      } 
    }
  }
}
