var longestPalindrome = function (s) {
  let sReverse = "";
  let startIndex = 0;

  for (let i = 0; i < s.length; i++) {
    sReverse = s[i] + sReverse;

    const distance = Math.abs(startIndex - i);
    const isPalindrome = sReverse === s.substr(startIndex, i + 1);
    console.log(isPalindrome);
    console.log("REVERSE: ", sReverse);
    console.log("substring", s.substr(startIndex, i + 1));
    if (isPalindrome) {
      // console.log(s.substr(0, i + 1)
      // console.log("here");
    }

    console.log("isPalindrome: ", isPalindrome);
    console.log("distance >= 3: ", distance >= 3);
    console.log("distance: ", distance);

    if (!isPalindrome && distance >= 2) {
      startIndex++;
    }
  }
};

let s = "cbbd";

// longestPalindrome(s);
