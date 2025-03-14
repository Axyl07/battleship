// export function testingFn() {
//   return "is this battleship working>/?";
// }

export class Ship{
  constructor(length=0,hitCount=0,sunkStatus=false,xCoordinate,yCoordinate) {
    this.length = length;
    this.hitCount = hitCount;
    this.sunkStatus = sunkStatus;
    this.xCoordinate = xCoordinate;
    this.yCoordinate = yCoordinate;
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

export class Gameboard{
  missedShotsArray = [];
  placedShips = [];
  place(x, y, shipName) {
    shipName.xCoordinate = x;
    shipName.yCoordinate = y;
    this.placedShips.push(shipName);
  }
  receiveAttack(x, y) {
    this.placedShips.forEach(ship => {
      if (x==ship.xCoordinate&&y==ship.yCoordinate) {
        //hit
        ship.hit()
      } else {
        //missedShot
        this.missedShotsArray.push([x, y]);
      }
    });
 }
}