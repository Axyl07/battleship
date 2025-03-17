// import { testingFn } from "./script.js";
import { describe, expect, test } from "@jest/globals";
import { Ship, Gameboard,Player } from "./script";
// test("testing", () => {
//   expect(testingFn()).toBe("is this battleship working>/?");
// });
//shipTests:
test("Testing Ship for sink", () => {
  const thesus = new Ship(3, 0, false);
  thesus.hit();
  thesus.hit();
  thesus.hit();
  expect(thesus.isSunk()).toBe(true);
});
test("Testing Ship for not sink", () => {
  const thesus2 = new Ship(2, 0, false);
  thesus2.hit();
  // console.log(thesus2)
  expect(thesus2.isSunk()).toBe(false);
});
//GameBoard Tests:
test("Place ship test", () => {
  const ship1 = new Ship(1, 0, false);
  const ship2 = new Ship(1, 0, false);
  const ship3 = new Ship(1, 0, false);
  const ship4 = new Ship(1, 0, false);
  const gameboard1 = new Gameboard();
  console.log(gameboard1.positions);
  gameboard1.place(0, 0, ship1);
  gameboard1.place(4, 0, ship2);
  gameboard1.place(2, 1, ship3);
  gameboard1.place(2, 5, ship4);

  expect(gameboard1.missedShots).toEqual([]);
  gameboard1.receiveAttack(0, 1);
  // console.log(gameboard1.placedShips);
  gameboard1.receiveAttack(0, 2);
  expect(gameboard1.missedShots).toEqual([
    [0, 1],
    [0, 2],
  ]);
  gameboard1.receiveAttack(0, 0);
  gameboard1.receiveAttack(4, 0);
  gameboard1.receiveAttack(2, 1);
  gameboard1.receiveAttack(2, 2);
  console.log(gameboard1.missedShots);
//   console.log(ship1);
//   console.log(ship2);
  expect(ship1.isSunk()).toBe(true);
  expect(ship2.isSunk()).toBe(true);
    expect(ship3.isSunk()).toBe(true);
    expect(ship4.isSunk()).toBe(false);
    expect(gameboard1.checkAllSunk()).toBe(false);
});


test('Player test', () => {
  const human = new Player('Human');
  const computer = new Player('Computer');
  const ship1 = new Ship(1, 0, false);
  const ship3 = new Ship(3, 0, false);
  human.gameboard.place(0, 0, ship1);
  human.gameboard.place(0, 1, ship3);
  human.gameboard.receiveAttack(0, 0);
  human.gameboard.receiveAttack(0, 1);
  human.gameboard.receiveAttack(0, 2);
  human.gameboard.receiveAttack(0, 3);
  console.log(human.gameboard.positions);
  expect(ship1.isSunk()).toBe(true)
  expect(ship3.isSunk()).toBe(true)
  // console.log(ship1.sunkStatus);
  expect(human.type).toBe('Human');
  expect(computer.type).toBe('Computer')
  expect(typeof(human.gameboard)).toBe('object')
})