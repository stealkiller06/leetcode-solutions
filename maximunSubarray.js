/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let maxSum = nums[0];
  let currentSum = 0;

  for (let n of nums) {
    if (currentSum < 0) {
      currentSum = 0;
    }

    currentSum += n;
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
};

let nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

console.log(maxSubArray(nums));
