/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  let l = 0;
  let r = x;

  while (l <= r) {
    const mid = parseInt((l + r) / 2);
    const result = mid * mid;

    if (result === x) return mid;

    if (result > x) {
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }
  return l - 1;
};

console.log(mySqrt(64));

