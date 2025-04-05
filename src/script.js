
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
  positions = Array.from(Array(10), () => new Array(10)); //creates 2D 

  place(x, y, shipName) {
    const length = shipName.length;
    if (y + length > 10) {
      y = 10 - length;
    }

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
