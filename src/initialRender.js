export default function initialRender(Player, Grid) {


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
        gridCell.style.backgroundColor = "orange"
        gridCell.style.border = "1px dashed cyan"
      }
    }
  }
}
