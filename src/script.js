// export function testingFn() {
//   return "is this battleship working>/?";
// }

export class Ship {
  constructor(
    length = 0,
    hitCount = 0,
    sunkStatus = false,
    // xCoordinate,
    // yCoordinate,
  ) {
    this.length = length;
    this.hitCount = hitCount;
    this.sunkStatus = sunkStatus;
    // this.xCoordinate = xCoordinate;
    // this.yCoordinate = yCoordinate;
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
    this.positions[x][y] = shipName;
    this.placedShips.push(shipName);
  }

  receiveAttack(x, y) {
    let ship = this.positions[x][y];
    if (typeof ship == 'object') {
      ship.hit();
    } else this.missedShots.push([x, y]);
  }
  checkAllSunk() {
    let count = 0;
    this.positions.forEach(ship => {
      if (ship.sunkStatus === false) {
        count++;
      }
    });
    if (count !== 0) {
      return true;
    } else return false;
    }
  }

