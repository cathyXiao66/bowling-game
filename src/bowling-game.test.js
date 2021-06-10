import * as bowlingGame from "./bowling-game.js";

describe("bowling game", () => {
  beforeEach(() => {
    bowlingGame.initialRolls();
  });

  const rollTimes = (noOfPins, noOfRolls) => {
    for (let i = 0; i < noOfRolls; i++) {
      bowlingGame.roll(noOfPins);
    }
  };

  it("should play no frames", () => {
    const noOfFrames = 0;
    const result = bowlingGame.score(noOfFrames);
    expect(result).toBe(0);
  });

  it("should play 10 frames but knock down no pins each time", () => {
    const noOfFrames = 10;
    rollTimes(0, noOfFrames * 2);
    const result = bowlingGame.score(noOfFrames);
    expect(result).toBe(0);
  });

  it("should play a normal frame", () => {
    const noOfFrames = 1;
    bowlingGame.roll(4);
    bowlingGame.roll(4);
    const result = bowlingGame.score(noOfFrames);
    expect(result).toBe(8);
  });

  it("should play a spare frame", () => {
    const noOfFrames = 2;
    bowlingGame.roll(4);
    bowlingGame.roll(6);
    bowlingGame.roll(5);
    bowlingGame.roll(0);
    const result = bowlingGame.score(noOfFrames);
    expect(result).toBe(20);
  });

  it("should play a spike frame", () => {
    const noOfFrames = 2;
    bowlingGame.roll(10);
    bowlingGame.roll(5);
    bowlingGame.roll(4);
    const result = bowlingGame.score(noOfFrames);
    expect(result).toBe(28);
  });

  it("should play 10 prefect frames", () => {
    const noOfFrames = 10;
    rollTimes(10, noOfFrames + 2);
    const result = bowlingGame.score(noOfFrames);
    expect(result).toBe(300);
  });
});
