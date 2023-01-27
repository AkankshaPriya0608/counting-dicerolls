class roll {
  #numberOfDice;
  #diceNumbers;

  constructor(numbersRolled) {
    if (typeof roll === "number") roll = [roll];
    this.#numberOfDice = roll.length;
    this.#diceNumbers = roll;
  }
  get numberOfDice() {
    return this.#numberOfDice;
  }
  get diceNumbers() {
    return this.#diceNumbers;
  }
}

export { roll };
