var longestSubstring = (inputArr, desiredSum) => {
  // current window sum and window sum start index

  let sum = 0;
  let sumStartIndex = 0;
  const solutions = [];

  inputArr.forEach((item, index) => {
    sum += item;

    while (sum > desiredSum) {
      sum -= inputArr[sumStartIndex];
      sumStartIndex++;
    }

    if (sum === desiredSum) {
      solutions.push(inputArr.slice(sumStartIndex, index + 1));
    }
  });

  return solutions;
};

const exampleInput1 = [1, 7, 9, 4, 3, 2, 2];
const desiredSum1 = 7;

console.log(longestSubstring(exampleInput1, desiredSum1));
