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
    if (y + length < 9) {
      console.log(this.positions);
      console.log(this.positions[x][y]);
      if (typeof this.positions[x][y] !== "object") {
        //to make sure we don't place over existing ship on that position
        for (let index = 1; index <= length; index++) {
          //to place same ship spanning multiple cells
          this.positions[x][y + index - 1] = shipName;
        }
        this.placedShips.push(shipName);
      } else {
        for (let index = 1; index <= length; index++) {
          //to place same ship spanning multiple cells
          this.positions[x][y + index - 1] = shipName;
        }
        this.placedShips.push(shipName);
      }
    } else {
      while (y + length > 9) {
        y = Math.floor(Math.random() * 10);
      }
      //for making sure that ship stays within grid's length
      console.log(this.positions);
      console.log(this.positions[x][y]);
      if (typeof this.positions[x][y] !== "object") {
        //to make sure we don't place over existing ship on that position
        for (let index = 1; index <= length; index++) {
          //to place same ship spanning multiple cells
          this.positions[x][y + index - 1] = shipName;
        }
        this.placedShips.push(shipName);
      } else {
        for (let index = 1; index <= length; index++) {
          //to place same ship spanning multiple cells
          this.positions[x][y + index - 1] = shipName;
        }
        this.placedShips.push(shipName);
      }
    }
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
