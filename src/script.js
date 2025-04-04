// export function testingFn() {
//   return "is this battleship working>/?";
// }

export class Ship {
  constructor(length = 0, hitCount = 0, sunkStatus = false) {
    this.length = length;
    this.hitCount = hitCount;
    this.sunkStatus = sunkStatus;
  }
  hit() {
    this.hitCount++;
  }
  isSunk() {
    if (this.hitCount < this.length) {
      this.sunkStatus = false;
    } else this.sunkStatus = true;
    return this.sunkStatus;
  }
}

export class Gameboard {
  missedShots = [];
  placedShips = [];
  positions = Array.from(Array(10), () => new Array(10)); //creates 2D array of 10x10

  // place0(x, y, shipName) {
  //   const length = shipName.length;
  //   while (
  //       //another ship is present at this location
  //       typeof this.positions[x][y] == "object" ||
  //       (typeof this.positions[x][y + length] == "object" && y + length <= 9) ||
  //       (typeof this.positions[x][y - length] == "object" && y - length >= 0)
  //     ) {
  //       x = Math.floor(Math.random() * 10); //move to another row if ship is present on that row
  //       // y = Math.floor(Math.random()*10)
  //     }
  //     if (y + length <= 9) {//to check if ship lies within grid's bound
  //       for (let index = 1; index <= length; index++) {
  //         //to place same ship spanning multiple cells
  //         this.positions[x][y + index - 1] = shipName;
  //       }
  //       this.placedShips.push(shipName);
  //     } else {
  //       //the ship's length exceeds grid's boundaries
  //       while (y + length > 9) {
  //         // y = Math.floor(Math.random() *10 )
  //         y = y - 1;
  //       }
  //       for (let index = 1; index <= length; index++) {
  //         //to place same ship spanning multiple cells
  //         this.positions[x][y + index - 1] = shipName;
  //       }
  //       this.placedShips.push(shipName);
  //     }
  //   }
  //no ship is present there

  place(x, y, shipName) {
    const length = shipName.length;
    if (y + length > 10) {
      y = 10 - length;
    }
    //   let freeCell = true;
    //  for (let index = 0; index < length; index++) {
    //   if (typeof this.positions[x][y+index]=="object") {
    //     freeCell = false;
    //   }
    //  }
    if (this.isPathFree(x, y, length)) {
      for (let index = 1; index <= length; index++) {
        //to place same ship spanning multiple cells
        this.positions[x][y + index - 1] = shipName;
      }
      this.placedShips.push(shipName);
    } else {
      while (!this.isPathFree(x, y, length)) {
        x = Math.floor(Math.random() * 10);
        y = Math.floor(Math.random() * (10-length+1)); // to ensure new y doesn't exceed the grid's bounds
      }
      for (let index = 1; index <= length; index++) {
        //to place same ship spanning multiple cells
        this.positions[x][y + index - 1] = shipName;
      }
      this.placedShips.push(shipName);
    }
  }

  isPathFree(x, y, length) {
    for (let index = 0; index < length; index++) {
      if (typeof this.positions[x][y + index] == "object") {
        return false;
      }
    } return true;
  }

  receiveAttack(x, y) {
    let ship = this.positions[x][y];
    if (typeof ship == "object") {
      ship.hit();
      return true;
    } else {
      this.missedShots.push([x, y]);
      return false;
    }
  }
  checkAllSunk() {
    let count = 0;
    this.placedShips.forEach((ship) => {
      if (ship.sunkStatus === false) {
        count++;
      }
    });
    if (count == 0) {
      return true;
    } else return false;
  }
}

export class Player {
  constructor(type, gameboard = new Gameboard()) {
    this.type = type;
    this.gameboard = gameboard;
  }
}
