import { roll } from "./roll.js";

class Dicerolls {
  #numberOfDice;
  #numberOfSides;
  #rolls;

  constructor(numberOfDice, numberOfSides) {
    this.#numberOfDice = numberOfDice;
    this.#numberOfSides = numberOfSides;
    this.#rolls = new Array();
  }

  get numberOfDice() {
    //returns the number of dice that are being rolled each time
    return this.#numberOfDice;
  }
  get numberOfSides() {
    //returns the number of sides of each die
    return this.#numberOfSides;
  }
  getSpecificRoll(index) {
    //returns a single roll object at the specified index position
    return this.#rolls[index];
  }
  getAllRolls() {
    //returns all roll objects in an array format
    return this.#rolls;
  }
  roll(roll) {
    //adds a roll object to the array of rolls
    this.#rolls.push(roll);
  }
  getNumberOfRolls() {
    //returns the number of rolls that have been added to the array so far
    return this.#rolls.length;
  }
  #validateRoll(roll) {
    //takes in a roll object
    //returns false if the roll on any die is <0 or >than "this.numberOfSides", or if the number of dice rolled is different than "this.numberOfDice"
    //otherwise returns true
  }
  averageCombinedRoll() {
    //returns the average number rolled
  }
  averageIndividualRoll() {
    //returns the average number rolled on each individual die
  }
  pValue() {
    //tells us if akanksha is cheating
  }
}

export { Dicerolls };
