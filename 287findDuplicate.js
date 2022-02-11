var findDuplicate = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    const index = Math.abs(nums[i]);
    const number = nums[index];

    if (number < 0) return Math.abs(nums[i]);

    nums[index] = nums[index] * -1;
  }

  return -1;
};

let nums = [1, 3, 4, 2, 2];

console.log(findDuplicate(nums));
console.log("end");
