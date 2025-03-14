// import { testingFn } from "./script.js";
import { describe, expect, test } from "@jest/globals";
import { Ship,Gameboard } from "./script";
// test("testing", () => {
//   expect(testingFn()).toBe("is this battleship working>/?");
// });
//shipTests:
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
    // console.log(thesus2)
    expect(thesus2.isSunk()).toBe(false);
})
//GameBoard Tests:
test('Place ship test', () => {
    const ship1 = new Ship(1, 0, false);
    const gameboard1 = new Gameboard();
    gameboard1.place(0, 0, ship1);
    expect(gameboard1.missedShotsArray).toEqual([]);
    gameboard1.receiveAttack(0, 1);
    expect(gameboard1.missedShotsArray).toEqual([[0,1]]);
    gameboard1.receiveAttack(0, 0);
    console.log(ship1);
    expect(ship1.isSunk()).toBe(true);
})