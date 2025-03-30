// import { testingFn } from "./script";
// console.log(testingFn());
import { startGame } from "./DOM";
// import { Ship } from "./script";
import "./style.css";


// startGame();
const startButton = document.querySelector(".startBtn");
startButton.addEventListener("click", () => {
  startGame();
  
  startButton.disabled = true;
});

// No.	Class of ship	Size
// 1	Carrier	        5
// 2	Battleship	    4
// 3	Destroyer	    3
// 4	Submarine	    3
// 5	Patrol Boat	    2
// const posiedon = new Ship(3, 0, false);
// // console.log(posiedon);
// posiedon.hit();
// posiedon.hit();
// posiedon.hit();
// console.log(posiedon.isSunk());
// console.log(posiedon.sunkStatus);
