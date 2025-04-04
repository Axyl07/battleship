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

  place(x, y, shipName) {
    const length = shipName.length;
    if (
      typeof this.positions[x][y] == "object" ||
      (typeof this.positions[x][y + length] == "object" && y + length < 9) ||
      (typeof this.positions[x][y - length] == "object" && y - length > 0)
    ) {
      //another ship is present at this location
      while (
        typeof this.positions[x][y] == "object" ||
        (typeof this.positions[x][y + length] == "object" && y + length < 9) ||
        (typeof this.positions[x][y - length] == "object" && y - length > 0)
      ) {
        x = Math.floor(Math.random() * 10); //move to another row if ship is present on that row
        // y = Math.floor(Math.random()*10)
      }
      if (y + length < 9) {
        for (let index = 1; index <= length; index++) {
          //to place same ship spanning multiple cells
          this.positions[x][y + index - 1] = shipName;
        }
        this.placedShips.push(shipName);
      } else {
        //the ship's length exceeds grid's boundaries
        while (y + length > 10) {
          y = y - 1;
        }
        for (let index = 1; index <= length; index++) {
          //to place same ship spanning multiple cells
          this.positions[x][y + index - 1] = shipName;
        }
        this.placedShips.push(shipName);
      }
    } else {
      //no ship is present there
      if (y + length < 9) {
        for (let index = 1; index <= length; index++) {
          //to place same ship spanning multiple cells
          this.positions[x][y + index - 1] = shipName;
        }
        this.placedShips.push(shipName);
      } else {
        //the ship's length exceeds grid's boundaries
        while (y + length > 10) {
          y = y - 1;
        }
        for (let index = 1; index <= length; index++) {
          //to place same ship spanning multiple cells
          this.positions[x][y + index - 1] = shipName;
        }
        this.placedShips.push(shipName);
      }
    }
  }

  // place(x, y, shipName) {
  //   const length = shipName.length;
  //   if (y + length < 9) {
  //     if (typeof this.positions[x][y] !== "object") {
  //       //to make sure we don't place over existing ship on that position
  //       for (let index = 1; index <= length; index++) {
  //         //to place same ship spanning multiple cells
  //         this.positions[x][y + index - 1] = shipName;
  //       }
  //       this.placedShips.push(shipName);
  //     } else {
  //       // for (let index = 1; index <= length; index++) {
  //       //   //to place same ship spanning multiple cells
  //       //   this.positions[x][y + index - 1] = shipName;
  //       // }
  //       // this.placedShips.push(shipName);
  //       while (typeof this.positions[x][y]=="object") {
  //         x = Math.floor(Math.random() * 10);
  //         y = Math.floor(Math.random() * 10);
  //       }
  //       for (let index = 1; index <= length; index++) {
  //         //to place same ship spanning multiple cells
  //         this.positions[x][y + index - 1] = shipName;
  //       }
  //       this.placedShips.push(shipName);
  //     }
  //   } else {
  //     while (y + length > 10) {
  //       // y = Math.floor(Math.random() * 10);
  //       y = y - 1;
  //       // y = y--;
  //     }
  //     //for making sure that ship stays within grid's length
  //     if (typeof this.positions[x][y] !== "object") {
  //       //to make sure we don't place over existing ship on that position
  //       for (let index = 1; index <= length; index++) {
  //         //to place same ship spanning multiple cells
  //         this.positions[x][y + index - 1] = shipName;
  //       }
  //       this.placedShips.push(shipName);
  //     } else {
  //       // for (let index = 1; index <= length; index++) {
  //       //   //to place same ship spanning multiple cells
  //       //   this.positions[x][y + index - 1] = shipName;
  //       // }
  //       // this.placedShips.push(shipName);
  //       while (this.positions[x][y] =="object") {
  //         x = Math.floor(Math.random() * 10);
  //         y = Math.floor(Math.random() * 10);
  //       }
  //       for (let index = 1; index <= length; index++) {
  //         //to place same ship spanning multiple cells
  //         this.positions[x][y + index - 1] = shipName;
  //       }
  //       this.placedShips.push(shipName);
  //     }
  //   }
  // }

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
