// export function testingFn() {
//   return "is this battleship working>/?";
// }

export class Ship{
  constructor(length=0,hitCount=0,sunkStatus=false) {
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