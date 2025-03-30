import renderGameboard from "./renderGameboard";

export default function play(human, computer) {
  console.log(human);
  console.log(computer);
  const humanGrid = document.querySelector(".humanGrid");
  const computerGrid = document.querySelector(".computerGrid");
  const humanGameboard = human.gameboard;
  const computerGameboard = computer.gameboard;
  const humanPositions = humanGameboard.positions;
  const computerPositions = computerGameboard.positions;

  const cells = document.querySelectorAll(".col");
  //   console.log(cells);
  cells.forEach((cell) => {
    cell.addEventListener("click", () => {
      const idString = cell.id;
      console.log(idString);
      const idStringLength = idString.length;
      let playerName = "";
      let x = 0;
      let y = 0;
      if (idStringLength === 13) {
        //humanCellisClicked
        playerName = idString.substring(0, 5);
        x = idString.substring(10, 11);
        y = idString.substring(12, 13);
        humanGameboard.receiveAttack(x, y);
        //render hit shots
        const humanShip = humanPositions[x][y];
        if (typeof humanShip === "object") {
          if (humanShip.hitCount > 0) {
            const gridCell = document.getElementById(
              `${humanGrid.className}-${x},${y}`,
            );
            gridCell.style.backgroundColor = "yellow";
            cell.disabled = "true";
          }
          if (humanShip.isSunk()) {
            renderGameboard(humanGameboard, humanGrid);
            cell.disabled = true;
          }
        } else {
          const gridCell = document.getElementById(
            `${humanGrid.className}-${x},${y}`,
          );
          gridCell.textContent = "•";
        }

      } else {
        //computerCellisClicked
        playerName = idString.substring(0, 8);
        x = idString.substring(13, 14);
        y = idString.substring(15, 16);
        computerGameboard.receiveAttack(x, y);
        //render hit shots
        const computerShip = computerPositions[x][y];
        if (typeof computerShip === "object") {
          if (computerShip.hitCount > 0) {
            const gridCell = document.getElementById(
              `${computerGrid.className}-${x},${y}`,
            );
            gridCell.style.backgroundColor = "yellow";
            cell.disabled = "true";
          }
          if (computerShip.isSunk()) {
            renderGameboard(computerGameboard, computerGrid);
            cell.disabled = true;
          }
        } else {
          const gridCell = document.getElementById(
            `${computerGrid.className}-${x},${y}`,
          );
          gridCell.textContent = "•";
        }
      }
      console.log(playerName);
      console.log(x, y);
      renderGameboard(human.gameboard, humanGrid);
      renderGameboard(computer.gameboard, computerGrid);
    });
  });
}
