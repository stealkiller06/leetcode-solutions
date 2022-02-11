/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  if (n !== 0 && m !== 0) {
    let elementRemoved = [];
    while (n + m != 0) {
      const currIndex = nums1.length - (n + m);
      const currIndex2 = nums2.length - n;

      if (elementRemoved.length > 0) {
        let arrayCompare = [
          elementRemoved[0],
          nums1[currIndex],
          nums2[currIndex2],
        ].filter((cur) => cur !== 0);

        let minElement = Math.min(...arrayCompare);
        console.log(nums1[currIndex]);
        console.log(nums2[currIndex2]);
        console.log(arrayCompare);
        console.log("min: ", minElement);

        if (minElement === nums1[currIndex]) {
          m--;
          console.log("m: ", m);
        } else if (minElement === nums2[currIndex2]) {
          n--;
          nums1[currIndex] = nums2[currIndex2];
          elementRemoved.push(nums1[currIndex]);
        } else {
          let temp = nums1[currIndex];
          nums1[currIndex] = elementRemoved;
          elementRemoved.push(temp);
          elementRemoved.unshift();
          m--;
          console.log("m: ", m);
        }
      } else {
        if (nums1[currIndex] <= nums2[currIndex2] && nums1[currIndex] !== 0) {
          m--;
        } else {
          elementRemoved.push(nums1[currIndex]);
          nums1[currIndex] = nums2[currIndex2];
          n--;
        }
      }

      console.log("----------------");
    }
  } else {
    if (m == 0 && n > 0) {
      nums1 = nums2;
    }
  }

  console.log(m, n);
  console.log(nums1);
  console.log("nums");
};

[4, 5, 6, 0, 0, 0];
(3)[(1, 2, 3)];
3;
let nums1 = [4, 5, 6, 0, 0, 0],
  m = 3,
  nums2 = [1, 2, 3],
  n = 3;

merge(nums1, m, nums2, n);
