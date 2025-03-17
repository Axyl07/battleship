// import { testingFn } from "./script";
// console.log(testingFn());
import { startGame } from "./DOM";
import { Ship } from "./script";
import { createGrid } from "./createGrid";
import "./style.css";

startGame();
const humanGrid = document.querySelector('.humanGrid');
const computerGrid = document.querySelector('.computerGrid');
createGrid(10,10,humanGrid)
createGrid(10,10,computerGrid)
// No.	Class of ship	Size
// 1	Carrier	        5
// 2	Battleship	    4
// 3	Destroyer	    3
// 4	Submarine	    3
// 5	Patrol Boat	    2
const posiedon = new Ship(3, 0, false);
console.log(posiedon);
posiedon.hit();
posiedon.hit();
posiedon.hit();
console.log(posiedon.isSunk());
// console.log(posiedon.sunkStatus);