/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  let i = 0;
  let incrementor = 0;
  let binaryResult = "";

  while (a[i] || b[i]) {
    const currA = a[a.length - 1 - i];
    const currB = b[b.length - 1 - i];
    let sumResult = parseInt(currA || 0) + parseInt(currB || 0);

    if (incrementor > 0) {
      sumResult += incrementor;
      incrementor--;
    }

    if (sumResult > 2) {
      incrementor++;
      binaryResult = "1" + binaryResult;
    } else if (sumResult == 2) {
      incrementor++;
      binaryResult = "0" + binaryResult;
    } else {
      binaryResult = sumResult === 0 ? "0" + binaryResult : "1" + binaryResult;
    }

    i++;
  }
  if (incrementor) {
    binaryResult = "1" + binaryResult;
  }

  return binaryResult;
};

let a = "1111",
  b = "1111";

console.log(addBinary(a, b));
