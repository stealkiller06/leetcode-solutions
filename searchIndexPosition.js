var searchInsert = function (nums, target) {
  let l = 0;
  let r = nums.length - 1;

  while (l < r) {
    const mid = parseInt((l + r) / 2);
    if (nums[mid] === target) return mid;

    if (target > nums[mid]) {
      l = mid + 1;
    }
    if (target < nums[mid]) {
      r = mid - 1;
    }
    console.log(mid);
  }
  return l;
};

let nums = [1, 3, 5, 6],
  target = 5;

console.log(searchInsert(nums, target));
