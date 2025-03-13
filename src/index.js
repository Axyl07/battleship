// import { testingFn } from "./script";
// console.log(testingFn());
import { Ship } from "./script";

const posiedon = new Ship(3, 0, false);
console.log(posiedon);
posiedon.hit();
posiedon.hit();
posiedon.hit();
console.log(posiedon.isSunk());
// console.log(posiedon.sunkStatus);