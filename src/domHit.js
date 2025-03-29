import renderGameboard from "./renderGameboard";

export default function play(human, computer) {
    console.log(human);
    console.log(computer);
  const humanGrid = document.querySelector(".humanGrid");
  const computerGrid = document.querySelector(".computerGrid");
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
        human.gameboard.receiveAttack(x, y);
      } else {
        //computerCellisClicked
        playerName = idString.substring(0, 8);
        x = idString.substring(13, 14);
        y = idString.substring(15, 16);
        computer.gameboard.receiveAttack(x, y);
      }
      console.log(playerName);
      console.log(x, y);
      renderGameboard(human.gameboard, humanGrid);
      renderGameboard(computer.gameboard, computerGrid);
    });
  });
}
