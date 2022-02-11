/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let i = 1;
  for (let j = 1; j < nums.length; j++) {
    if (nums[j] !== nums[j - 1]) {
      nums[i] = nums[j];
      i++;
    }
  }
  nums.splice(i, nums.length - 1);
  console.log(nums);

  return ++i;
};

let nums = [1, 1, 1, 1, 1, 1, 2, 2, 2, 4, 4];
removeDuplicates(nums);
console.log(nums);
