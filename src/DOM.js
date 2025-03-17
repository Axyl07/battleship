import { Player, Gameboard, Ship } from "./script";
// No.	Class of ship	Size
// 1	Carrier	        5
// 2	Battleship	    4
// 3	Destroyer	    3
// 4	Submarine	    3
// 5	Patrol Boat	    2
export function startGame() {
  const startButton = document.querySelector(".startBtn");
  startButton.addEventListener("click", () => {
    console.log("test");
    const Human = new Player("Human");
    const Computer = new Player("Computer");
    //human ships
    const Hcarrier = new Ship(5);
    const HBattleship = new Ship(4);
    const HDestroyer = new Ship(3);
    const HSubmarine = new Ship(3);
    const HPatrolBoat = new Ship(2);
    //computer ships
    const Ccarrier = new Ship(5);
    const CBattleship = new Ship(4);
    const CDestroyer = new Ship(3);
    const CSubmarine = new Ship(3);
    const CPatrolBoat = new Ship(2);
  });
}
