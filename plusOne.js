/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let increment = 0;
  digits[digits.length - 1] += 1;

  for (let i = digits.length - 1; i >= 0; i--) {
    if (increment) {
      digits[i] += increment;
      increment--;
    }

    if (digits[i] === 10) {
      increment++;
      digits[i] = 0;

      if (digits[i - 1] === undefined) {
        digits.unshift(1);
        break;
      }
    }

    if (!increment) break;
  }

  return digits;
};

let digits = [9, 9];

console.log(plusOne(digits));
