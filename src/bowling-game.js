let rolls = [];

const isStrike = (rollIndex) => {
  return rolls[rollIndex] === 10;
};

const isSpare = (rollIndex) => {
  return rolls[rollIndex] + rolls[rollIndex + 1] === 10;
};

const getNormalScore = (rollIndex) => {
  return rolls[rollIndex] + rolls[rollIndex + 1];
};

const getSpareScore = (rollIndex) => {
  return rolls[rollIndex] + rolls[rollIndex + 1] + rolls[rollIndex + 2];
};

const getStrikeScore = (rollIndex) => {
  return rolls[rollIndex] + rolls[rollIndex + 1] + rolls[rollIndex + 2];
};

export const initialRolls = () => {
  rolls = [];
};

export const roll = (noOfPins) => {
  rolls.push(noOfPins);
};

export const score = (noOfFrames) => {
  let result = 0;
  let rollIndex = 0;
  for (let frameIndex = 0; frameIndex < noOfFrames; frameIndex++) {
    if (isStrike(rollIndex)) {
      result += getStrikeScore(rollIndex);
      rollIndex++;
    } else if (isSpare(rollIndex)) {
      result += getSpareScore(rollIndex);
      rollIndex += 2;
    } else {
      result += getNormalScore(rollIndex);
      rollIndex += 2;
    }
  }
  return result;
};
