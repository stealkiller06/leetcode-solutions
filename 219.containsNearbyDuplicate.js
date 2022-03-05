var containsNearbyDuplicate = function (nums, k) {
  const container = new Map();
  let startIndex = 0;

  for (let i = 0; i < nums.length; i++) {
    if (i > k) {
      container.delete(nums[startIndex]);
      startIndex++;
    }

    if (container.has(nums[i])) {
      return true;
    } else {
      container.set(nums[i], true);
    }
  }

  return false;
};

let nums = [1, 2, 3, 1, 2, 3],
  k = 2;

console.log(containsNearbyDuplicate(nums, k));
