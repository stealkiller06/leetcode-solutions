var strStr = function (haystack, needle) {
  if (!needle) return 0;

  for (let i = 0; i < haystack.length; i++) {
    const inversedIndex = haystack.length - 1 - i;

    if (haystack[i] === needle[0]) {
      if (haystack.substr(i, needle.length) === needle) {
        return i;
      }
    }

    if (haystack[inversedIndex] === needle[needle.length - 1]) {
      let needleLength = needle.length === 1 ? 0 : needle.length;

      if (
        haystack.substr(inversedIndex - needleLength, needle.length) === needle
      ) {
        return inversedIndex - needleLength;
      }
    }
  }

  return -1;
};

("mississippi");
("issip");
let haystack = "abc",
  needle = "c";

console.log(strStr(haystack, needle));
