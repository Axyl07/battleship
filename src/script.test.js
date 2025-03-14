// import { testingFn } from "./script.js";
import { describe, expect, test } from "@jest/globals";
import { Ship } from "./script";
// test("testing", () => {
//   expect(testingFn()).toBe("is this battleship working>/?");
// });

test("Testing Ship for sink", () => {
    const thesus = new Ship(3,0,false);
    thesus.hit();
    thesus.hit();
    thesus.hit();
    expect(thesus.isSunk()).toBe(true);
})
test("Testing Ship for not sink", () => {
    const thesus2 = new Ship(2,0,false);
    thesus2.hit();
    console.log(thesus2)
    expect(thesus2.isSunk()).toBe(false);
})
