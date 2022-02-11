const convertionTable = {
  I: 1,
  IV: 4,
  V: 5,
  IX: 9,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};
var romanToInt = function (s) {
  let incrementor = 0;
  for (let i = 0; i < s.length; i++) {
    const beforeNumber = s[i - 1];
    const currentRomanNumber = s[i];
    const convertedNumber = convertionTable[currentRomanNumber];
    // incrementor += convertedNumber
    if (currentRomanNumber != "I" && beforeNumber == "I") {
      incrementor += convertedNumber - 2;
    } else if (
      (currentRomanNumber === "C" || currentRomanNumber === "L") &&
      beforeNumber === "X"
    ) {
      incrementor += convertedNumber - 20;
    } else if (currentRomanNumber === "D" && beforeNumber === "C") {
      incrementor += convertedNumber - 200;
    } else if (currentRomanNumber === "M" && beforeNumber === "C") {
      incrementor += convertedNumber - 200;
    } else {
      incrementor += convertedNumber;
    }
  }

  return incrementor;
};

const romanNumber = "MMMXLV";
console.log(romanToInt(romanNumber));
console.log("this is the result");
console.log("expected 3045");
