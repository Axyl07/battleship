import { Player, Ship } from "./script";
import { createGrid } from "./createGrid";
import play from "./play";
import initialRender from "./initialRender";
import resetGrid from "./resetGrid";
// import removeGrid from "./removeGrid";
// import renderGameboard from "./renderGameboard";
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
  humanGrid.style.display = "flex";
  computerGrid.style.display = "flex";
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

  //pre defined coordinates if not randomized
  let x1 = 7;
  let y1 = 9;
  let x2 = 9;
  let y2 = 5;
  let x3 = 9;
  let y3 = 4;
  let x4 = 9;
  let y4 = 3;
  let x5 = 7;
  let y5 = 5;
  let x6 = 8;
  let y6 = 3;
  let x7 = 3;
  let y7 = 5;
  let x8 = 2;
  let y8 = 1;
  let x9 = 6;
  let y9 = 4;
  let x10 = 8;
  let y10 = 2;
  Human.gameboard.place(x1, y1, Hcarrier);
  Human.gameboard.place(x2, y2, HBattleship);
  Human.gameboard.place(x3, y3, HDestroyer);
  Human.gameboard.place(x4, y4, HSubmarine);
  Human.gameboard.place(x5, y5, HPatrolBoat);

  Computer.gameboard.place(x6, y6, CBattleship);
  Computer.gameboard.place(x7, y7, Ccarrier);
  Computer.gameboard.place(x8, y8, CSubmarine);
  Computer.gameboard.place(x9, y9, CPatrolBoat);
  Computer.gameboard.place(x10, y10, CDestroyer);

  initialRender(Human, humanGrid);
  // initialRender(Computer, computerGrid);
  
  const randomBtn = document.querySelector(".random");
  randomBtn.style.display = 'block'
  randomBtn.addEventListener("click", () => {
    //creates 2D array of 10x10

    resetGrid(humanGrid);
    resetGrid(computerGrid);
    createGrid(10, 10, humanGrid);
    createGrid(10, 10, computerGrid);
    Human.gameboard.positions = Array.from(Array(10), () => new Array(10));
    Computer.gameboard.positions = Array.from(Array(10), () => new Array(10));

    Human.gameboard.placedShips = [];
    Computer.gameboard.placedShips = [];


    // document.querySelector('.humanGrid').remove();
    // document.querySelector('.computerGrid').remove();
    let allRandomPositionsArray = [];
    // Human.gameboard.placedShips = [];
    // Computer.gameboard.placedShips = [];
    while (allRandomPositionsArray.length != 10) {
      let move = [
        Math.floor(Math.random() * 10),
        Math.floor(Math.random() * 10),
      ];
      let moveInStringForm = move.toLocaleString();
      while (allRandomPositionsArray.includes(moveInStringForm)) {
        move = [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)];
        moveInStringForm = move.toLocaleString();
      }
      allRandomPositionsArray.push(moveInStringForm);
    }
    console.log(allRandomPositionsArray);
    x1 = allRandomPositionsArray[0].charAt(0);
    y1 = allRandomPositionsArray[0].charAt(2);
    x2 = allRandomPositionsArray[1].charAt(0);
    y2 = allRandomPositionsArray[1].charAt(2);
    x3 = allRandomPositionsArray[2].charAt(0);
    y3 = allRandomPositionsArray[2].charAt(2);
    x4 = allRandomPositionsArray[3].charAt(0);
    y4 = allRandomPositionsArray[3].charAt(2);
    x5 = allRandomPositionsArray[4].charAt(0);
    y5 = allRandomPositionsArray[4].charAt(2);
    x6 = allRandomPositionsArray[5].charAt(0);
    y6 = allRandomPositionsArray[5].charAt(2);
    x7 = allRandomPositionsArray[6].charAt(0);
    y7 = allRandomPositionsArray[6].charAt(2);
    x8 = allRandomPositionsArray[7].charAt(0);
    y8 = allRandomPositionsArray[7].charAt(2);
    x9 = allRandomPositionsArray[8].charAt(0);
    y9 = allRandomPositionsArray[8].charAt(2);
    x10 = allRandomPositionsArray[9].charAt(0);
    y10 = allRandomPositionsArray[9].charAt(2);

    Human.gameboard.place(x1, y1, Hcarrier);
    Human.gameboard.place(x2, y2, HBattleship);
    Human.gameboard.place(x3, y3, HDestroyer);
    Human.gameboard.place(x4, y4, HSubmarine);
    Human.gameboard.place(x5, y5, HPatrolBoat);

    Computer.gameboard.place(x6, y6, CDestroyer);
    Computer.gameboard.place(x7, y7, Ccarrier);
    Computer.gameboard.place(x8, y8, CSubmarine);
    Computer.gameboard.place(x9, y9, CPatrolBoat);
    Computer.gameboard.place(x10, y10, CBattleship);

    initialRender(Human, humanGrid);
    // initialRender(Computer, computerGrid);
    console.log(Human.gameboard.positions);
    console.log(Computer.gameboard.positions);
    console.log(Human.gameboard.placedShips);
    console.log(Computer.gameboard.placedShips);
    // console.log(Human.gameboard);
    // // console.log(allRandomPositionsArray);
    // console.log(x1, y1);
    // console.log("test");
  });
  console.log(x1, y1);
  
  
  // console.log(Human.gameboard.placedShips);
  // console.log(Computer.gameboard.placedShips);
  console.log(Human.gameboard.positions);
  console.log(Computer.gameboard.positions);
  

  const playBtn = document.querySelector(".play");
  playBtn.style.display = "block";
  playBtn.addEventListener("click", () => {
    play(Human, Computer);
    playBtn.style.display = "none";
  });
}
