import { Player, Gameboard, Ship } from "./script";
import { createGrid } from "./createGrid";
import renderGameboard from "./renderGameboard";

// No.	Class of ship	Size
// 1	Carrier	        5
// 2	Battleship	    4
// 3	Destroyer	      3
// 4	Submarine	      3
// 5	Patrol Boat	    2
export function startGame() {
  console.log("test");
  const Human = new Player("Human");
  const Computer = new Player("Computer");

  const humanGrid = document.querySelector(".humanGrid");
  const computerGrid = document.querySelector(".computerGrid");
  // console.log(humanGrid.querySelector('#1,1'));
  humanGrid.style.display = 'flex'
  computerGrid.style.display = 'flex'
  createGrid(10, 10, humanGrid);
  createGrid(10, 10, computerGrid);
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

  Human.gameboard.place(0, 0, Hcarrier);
  Human.gameboard.place(1, 6, HBattleship);
  Human.gameboard.place(2, 3, HDestroyer);
  Human.gameboard.place(3, 6, HSubmarine);
  Human.gameboard.place(7, 5, HPatrolBoat);

  Computer.gameboard.place(0, 0, CDestroyer);

  Human.gameboard.receiveAttack(0,0)
  Human.gameboard.receiveAttack(0,1)
  Human.gameboard.receiveAttack(0,2)
  Human.gameboard.receiveAttack(0,3)
  Human.gameboard.receiveAttack(0,4)
  renderGameboard(Human.gameboard, humanGrid);
  renderGameboard(Computer.gameboard,computerGrid);
}


