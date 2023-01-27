import { Dicerolls } from "../src/dicerolls.js";
import { expect } from "chai";
import { roll } from "../src/roll.js";

describe("counting-dicerolls", function () {
  describe("dicerolls", function () {
    it("it should create a DiceRolls object with 1 dice and 6 sides", function () {
      //setup
      const dice = 1;
      const sides = 6;
      //exercise
      //verify
      const dicerolls = new Dicerolls(dice, sides);
    });
    describe("getAllRoles", function () {
      it("it should store a diceroll with a roll of 4 on a six sided dice", function () {
        //setup
        const dice = 1;
        const sides = 6;
        const inputRoll = new roll(4);

        //exercise
        const dicerolls = new Dicerolls(dice, sides);
        dicerolls.roll(inputRoll);
        let storedRolls = dicerolls.getAllRolls();
        //verify

        expect(inputRoll).to.eql(storedRolls[0]);
      });
      it("it should store diceroll with rolls of 4 and 6 on two six sided dice", function () {
        //setup
        const dice = 2;
        const sides = 6;
        const inputRoll = new roll([4, 6]);

        //exercise
        const dicerolls = new Dicerolls(dice, sides);
        dicerolls.roll(inputRoll);
        let storedRolls = dicerolls.getAllRolls();

        //verify
        expect(inputRoll).to.eql(storedRolls[0]);
      });
      it("it should store two dicerolls with rolls of 3,5 and 5,6 on two six sided dice", function () {
        //setup
        const dice = 2;
        const sides = 6;
        const inputRoll_1 = new roll([3, 5]);
        const inputRoll_2 = new roll([5, 6]);

        //exercise
        const dicerolls = new Dicerolls(dice, sides);
        dicerolls.roll(inputRoll_1);
        dicerolls.roll(inputRoll_2);
        let storedRolls = dicerolls.getAllRolls();

        //verify
        expect([inputRoll_1, inputRoll_2]).to.eql(storedRolls);
      });
    });
    it("it should throw an error for rolls less than 0", function () {
      //setup
      //exercise
      //verify
    });
    it("it should throw an error for dice rolls greater than specified sides of the dice", function () {
      //setup
      //exercise
      //verify
    });
  });
});
