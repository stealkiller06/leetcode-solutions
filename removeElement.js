/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let i = 0;
  let elementRemove = 0;

  for (let j = 0; j < nums.length; j++) {
    if (nums[i] === val) {
      nums[i] = nums[nums.length - 1 - elementRemove];
      nums[nums.length - 1 - elementRemove] = "_";
      elementRemove++;
    } else {
      i++;
    }
    console.log(nums);
    console.log(elementRemove);
  }

  console.log(nums);
  nums.splice(i, nums.length - 1);

  console.log(nums);
};

let nums = [0, 1, 2, 2, 3, 0, 4, 2];
let val = 2;

removeElement(nums, val);

console.log("expected:", [0, 1, 4, 0, 3]);
