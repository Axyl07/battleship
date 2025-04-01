export default function play(Human, Computer) {
  let allComputerPlayedMoves = [];
  const computerGrid = document.querySelector(".computerGrid");
  const computerGameboard = Computer.gameboard;
  const computerPositions = computerGameboard.positions;

  const humanGrid = document.querySelector(".humanGrid");
  const humanGameboard = Human.gameboard;
  const humanPositions = humanGameboard.positions;
  // let x = 0;
  // let y = 0;
  const cells = computerGrid.querySelectorAll(".col");
  function handleClick(cell) {
    //explosion sound effect
    const explosion = document.querySelector('#explosion');
    
     //human plays first
     const idString = cell.id;
     let x = idString.substring(13, 14);
     let y = idString.substring(15, 16);
     computerGameboard.receiveAttack(x, y);
     let hitCell = computerPositions[x][y];
    if (typeof hitCell === "object") {
      explosion.play();
      explosion.muted = false;
       if (hitCell.hitCount > 0 && !hitCell.isSunk()) {
         const gridCell = document.getElementById(
           `${computerGrid.className}-${x},${y}`,
         );
         gridCell.style.backgroundColor = "yellow";
         // cell.disabled = "true";
         // return true;
       } else if (hitCell.hitCount > 0 && hitCell.isSunk()) {
         const positions = computerGameboard.positions;
         for (let i = 0; i < positions.length; i++) {
           const row = positions[i];
           for (let j = 0; j < row.length; j++) {
             const col = row[j];
             if (typeof col === "object") {
               if (col.hitCount > 0 && col.isSunk()) {
                 //sunk
                 const gridCell = document.getElementById(
                   `${computerGrid.className}-${i},${j}`,
                 );
                 gridCell.textContent = "X";
                 gridCell.style.backgroundColor = "yellow";
                 gridCell.style.color = "Red";
                 gridCell.style.border = "1px solid red";
               }
             }
           }
         }
       }
     } else {
       //shot missed with empty hit
       const gridCell = document.getElementById(
         `${computerGrid.className}-${x},${y}`,
       );
       gridCell.textContent = "•";
       // cell.disabled = "true";
     }
     // cell.disabled = "true";

     //then computer plays

     let move = [
       Math.floor(Math.random() * 10),
       Math.floor(Math.random() * 10),
     ];
     let moveInStringForm = move.toLocaleString();
     //to only use moves that have not been played before;
     while (allComputerPlayedMoves.includes(moveInStringForm)) {
       move = [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)];
       moveInStringForm = move.toLocaleString();
     }
     allComputerPlayedMoves.push(moveInStringForm);
     x = move[0];
     y = move[1];
     humanGameboard.receiveAttack(x, y);
     //rendering after hit
     hitCell = humanPositions[x][y];
    if (typeof hitCell === "object") {
      explosion.play();
      explosion.muted = false;
       if (hitCell.hitCount > 0 && !hitCell.isSunk()) {
         const gridCell = document.getElementById(
           `${humanGrid.className}-${x},${y}`,
         );
         gridCell.style.backgroundColor = "yellow";
       } else if (hitCell.hitCount > 0 && hitCell.isSunk()) {
         const positions = humanGameboard.positions;
         for (let i = 0; i < positions.length; i++) {
           const row = positions[i];
           for (let j = 0; j < row.length; j++) {
             const col = row[j];
             if (typeof col === "object") {
               if (col.hitCount > 0 && col.isSunk()) {
                 //sunk
                 const gridCell = document.getElementById(
                   `${humanGrid.className}-${i},${j}`,
                 );
                 gridCell.textContent = "X";
                 gridCell.style.backgroundColor = "yellow";
                 gridCell.style.color = "Red";
                 gridCell.style.border = "1px solid red";
               }
             }
           }
         }
       }
     } else {
       //shot missed with empty hit
       const gridCell = document.getElementById(
         `${humanGrid.className}-${x},${y}`,
       );
       gridCell.textContent = "•";
       // cell.disabled = "true";
     }
     cell.disabled = "true";
     if (humanGameboard.checkAllSunk()) {
       
       const results = document.querySelector(".results");
       results.textContent = "Computer has won";
       results.style.textAlign = "center";
       results.style.fontSize = "3rem";
       removeEventListeners();
       return;
  
      } else if (computerGameboard.checkAllSunk()) {
        const results = document.querySelector(".results");
        results.textContent = "Human has won";
        results.style.textAlign = "center";
        results.style.fontSize = "3rem";
        removeEventListeners();
       return;
     }
  }

  
  cells.forEach((cell) => {
    cell.handleClick = () => handleClick(cell);
    cell.addEventListener('click',cell.handleClick)
  });
  
  function removeEventListeners() {
    cells.forEach(cell => {
      cell.removeEventListener('click', cell.handleClick)
      cell.disabled = true;
    })
  }

}

// export default function playGame(human, computer) {
//   let activePlayer = human;
//   const switchPlayer = () => {
//     activePlayer === human ? computer : human;
//   };
//   let allPlayedMoves = [];

//     if (activePlayer === human) {
//       const computerGrid = document.querySelector(".computerGrid");
//       const computerGameboard = computer.gameboard;
//       // const computerPositions = computerGameboard.positions;
//       let x = 0;
//       let y = 0;
//       const cells = computerGrid.querySelectorAll(".col");
//       cells.forEach((cell) => {
//         cell.addEventListener("click", () => {
//           const idString = cell.id;
//           x = idString.substring(13, 14);
//           y = idString.substring(15, 16);
//           renderGameboard(computer, computerGrid);
//         });
//       });
//       computerGameboard.receiveAttack(x, y);
//       // renderGameboard(computer, computerGrid);
//     }
//     switchPlayer();
//     if (activePlayer === computer) {
//       const humanGrid = document.querySelector(".humanGrid");
//       const humanGameboard = human.gameboard;
//       let move = [
//         Math.floor(Math.random() * 10),
//         Math.floor(Math.random() * 10),
//       ];
//       let moveInStringForm = move.toLocaleString();
//       while (allPlayedMoves.includes(moveInStringForm)) {
//         move = [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)];
//         moveInStringForm = move.toLocaleString();
//       }
//       allPlayedMoves.push(moveInStringForm);

//       const x = move[0];
//       const y = move[1];
//       humanGameboard.receiveAttack(x, y);
//       renderGameboard(human, humanGrid);
//     }
//   switchPlayer();

// }

// export function computerMove(human, allPlayedMoves) {
//   // counter = 0;
//   const humanGrid = document.querySelector(".humanGrid");
//   const humanGameboard = human.gameboard;
//   const humanPositions = humanGameboard.positions;
//   let move = [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)];
//   let moveInStringForm = move.toLocaleString();
//   //to only use moves that have not been played before;
//   while (allPlayedMoves.includes(moveInStringForm)) {
//     move = [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)];
//     moveInStringForm = move.toLocaleString();
//   }
//   const x = move[0];
//   const y = move[1];
//   allPlayedMoves.push(moveInStringForm);
//   if (humanGameboard.receiveAttack(x, y)) {
//     //attack has hit a ship
//     const humanShip = humanPositions[x][y];
//     if (typeof humanShip === "object") {
//       if (humanShip.hitCount > 0) {
//         const gridCell = document.getElementById(
//           `${humanGrid.className}-${x},${y}`,
//         );
//         gridCell.style.backgroundColor = "yellow";
//         // cell.disabled = "true";
//       }
//       if (humanShip.isSunk()) {
//         renderGameboard(human, humanGrid);
//         // cell.disabled = true;
//       }
//     }
//     return true;
//   } else {
//     //attack has not hit a ship
//     const gridCell = document.getElementById(
//       `${humanGrid.className}-${x},${y}`,
//     );
//     gridCell.textContent = "•";
//     return false;
//   }
// }

// export function HumanMove(computer) {
//   const computerGrid = document.querySelector(".computerGrid");
//   const computerGameboard = computer.gameboard;
//   const computerPositions = computerGameboard.positions;
//   const cells = computerGrid.querySelectorAll(".col");
//   cells.forEach((cell) => {
//     cell.addEventListener("click", () => {
//       const idString = cell.id;

//       let x = 0;
//       let y = 0;

//       //computerCellisClicked
//       x = idString.substring(13, 14);
//       y = idString.substring(15, 16);
//       if (computerGameboard.receiveAttack(x, y)) {
//         // renderGameboard(computer, computerGrid);
//         const computerShip = computerPositions[x][y];
//         if (typeof computerShip === "object") {
//           if (computerShip.hitCount > 0) {
//             const gridCell = document.getElementById(
//               `${computerGrid.className}-${x},${y}`,
//             );
//             gridCell.style.backgroundColor = "yellow";
//             cell.disabled = "true";

//             // return true;
//           }
//           if (computerShip.hitCount > 0 && computerShip.isSunk()) {
//             const gridCell = document.getElementById(
//               `${computerGrid.className}-${x},${y}`,
//             );
//             gridCell.textContent = "X";

// //             gridCell.style.color = "Red";
// //             gridCell.style.border = "1px solid red";
//           }
//         }
//         // return true;
//         //render hit shots
//         // if (computerShip.isSunk()) {
//         //   renderGameboard(computerGameboard, computerGrid);
//         //   cell.disabled = true;
//         //   return true;
//         // }
//       } else {
//         //attack has not hit a ship
//         const gridCell = document.getElementById(
//           `${computerGrid.className}-${x},${y}`,
//         );
//         gridCell.textContent = "•";
//         // return false;
//       }

//       // renderGameboard(human.gameboard, humanGrid);
//       // renderGameboard(computer.gameboard, computerGrid);
//     });
//   });

//   // return;
// }

// export function gameLoop() {
//   while (computerMove()) {
//     console.log("computer is playing");
//   }
//   while (HumanMove()) {
//     console.log("Human is playing");
//   }
// }

//  function play(human, computer) {
//   // if (human.gameboard.checkAllSunk() || computer.gameboard.checkAllSunk()) {
//   //   console.log("Game ended");
//   // }
//   if (HumanMove(computer)) {
//     HumanMove(computer)
//   } else {
//   let allPlayedMoves = [];
//   computerMove(human, allPlayedMoves);
//   }

//   // let allPlayedMoves = [];
//   // while (!human.gameboard.checkAllSunk()) {
//   // computerMove(human, allPlayedMoves);

//   // }
//   // HumanMove(computer);
//   // let counter = 0;
//   // if (counter ==0) {
//   //   HumanMove(computer, counter);
//   // } else {
//   //   computerMove(human, allPlayedMoves, counter);
//   // }
//     // console.log("infi loop?")
// // console.log("Game ended")

//   // console.log(human);
//   // console.log(computer);
//   // const humanGrid = document.querySelector(".humanGrid");
//   // const computerGrid = document.querySelector(".computerGrid");
//   // const humanGameboard = human.gameboard;
//   // const computerGameboard = computer.gameboard;
//   // const humanPositions = humanGameboard.positions;
//   // const computerPositions = computerGameboard.positions;
//   // const cells = computerGrid.querySelectorAll(".col");
//   // cells.forEach((cell) => {
//   //   cell.addEventListener("click", () => {
//   //     const idString = cell.id;
//   //     console.log(idString);
//   //     const idStringLength = idString.length;
//   //     let playerName = "";
//   //     let x = 0;
//   //     let y = 0;
//   //     if (idStringLength === 13) {
//   //       //humanCellisClicked
//   //       playerName = idString.substring(0, 5);
//   //       x = idString.substring(10, 11);
//   //       y = idString.substring(12, 13);
//   //       humanGameboard.receiveAttack(x, y);
//   //       //render hit shots
//   //       const humanShip = humanPositions[x][y];
//   //       if (typeof humanShip === "object") {
//   //         if (humanShip.hitCount > 0) {
//   //           const gridCell = document.getElementById(
//   //             `${humanGrid.className}-${x},${y}`,
//   //           );
//   //           gridCell.style.backgroundColor = "yellow";
//   //           cell.disabled = "true";
//   //         }
//   //         if (humanShip.isSunk()) {
//   //           renderGameboard(humanGameboard, humanGrid);
//   //           cell.disabled = true;
//   //         }
//   //       } else {
//   //         const gridCell = document.getElementById(
//   //           `${humanGrid.className}-${x},${y}`,
//   //         );
//   //         gridCell.textContent = "•";
//   //       }
//   //     } else {
//   //       //computerCellisClicked
//   //       playerName = idString.substring(0, 8);
//   //       x = idString.substring(13, 14);
//   //       y = idString.substring(15, 16);
//   //       computerGameboard.receiveAttack(x, y);
//   //       //render hit shots
//   //       const computerShip = computerPositions[x][y];
//   //       if (typeof computerShip === "object") {
//   //         if (computerShip.hitCount > 0) {
//   //           const gridCell = document.getElementById(
//   //             `${computerGrid.className}-${x},${y}`,
//   //           );
//   //           gridCell.style.backgroundColor = "yellow";
//   //           cell.disabled = "true";
//   //         }
//   //         if (computerShip.isSunk()) {
//   //           renderGameboard(computerGameboard, computerGrid);
//   //           cell.disabled = true;
//   //         }
//   //       } else {
//   //         const gridCell = document.getElementById(
//   //           `${computerGrid.className}-${x},${y}`,
//   //         );
//   //         gridCell.textContent = "•";
//   //       }
//   //     }
//   //     console.log(playerName);
//   //     console.log(x, y);
//   //     // renderGameboard(human.gameboard, humanGrid);
//   //     // renderGameboard(computer.gameboard, computerGrid);
//   //   });
//   // });
// }
