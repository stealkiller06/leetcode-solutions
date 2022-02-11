var maximunSumSubArray = (inputArray, k) => {
  let maxSum = 0;
  let currSum = 0;
  let startSumIndex = 0;
  let startIndexEnd = 0;

  //windows init
  for (let i = 0; i < k; i++) {
    currSum += inputArray[i];
    maxSum += inputArray[i];
  }

  for (let i = k; i <= inputArray.length - k; i++) {
    currSum += inputArray[i] - inputArray[startSumIndex];
    startSumIndex++;

    if (currSum > maxSum) {
      maxSum = currSum;
      startSumIndexEnd = startSumIndex;
    }
  }
  console.log(startSumIndexEnd);
  console.log(inputArray.length - )
};

let inputs = [-1, 2, 3, 1, -3, 2];
let k = 2;

console.log(maximunSumSubArray(inputs, k));
